import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import Decimal from 'decimal.js';
import { RefreshTokenPayload, AccessTokenPayload, TokensDto } from '../dtos';
import { RedisService } from '@apps/api/redis/redis.service';
// import { IJwtConfig, JWT_CONFIG } from './config/auth/jwt.config';
import { GetUserService } from '@apps/api/users/services';
// import { UserEntity } from '@apps/api/users/entities/user.entity';
import { UserRole } from '@apps/api/common/enums';
import { UserEntity } from '@apps/api/database/entities';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly getUserService: GetUserService,
    private readonly jwtService: JwtService,
    private readonly authRedisService: RedisService,
    // private readonly globalConfigService: GlobalConfigService,
  ) {}

  // private issuer = this.configService.get('app').webApiUrl;

  public async signRefreshToken(user: UserEntity): Promise<string | undefined> {
    // const conf = this.configService.get<IJwtConfig>(JWT_CONFIG);
    const conf = this.configService.get('jwt');
    // const sysConf = (await this.globalConfigService.getConfigByKey<AuthConfigDto>('auth')) as AuthConfigDto;
    // const EXP = sysConf ? sysConf.refreshTokenLifespan : 1209600;
    const EXP = 1209600; // ~ 20 min
    const NOW_SECONDS = Math.round(Number(new Date()) / 1000);

    const payload: RefreshTokenPayload = {
      sub: user.id.toString(),
      role: user.role,
      exp: new Decimal(NOW_SECONDS).plus(EXP).toNumber(),
      iat: NOW_SECONDS,
      typ: 'Refresh',
      // iss: this.issuer,
    };

    const refToken = await this.jwtService.signAsync(payload, {
      // expiresIn: FOURTEEN_DAYS_IN_SEC,
      privateKey: conf.privateKey,
      algorithm: 'ES256',
      keyid: '354e8056-9727-407c-9a97-1dfea271d22',
    });
    // await this.authRedisService.putValue<typeof refToken>(
    //   `${payload.sub}_${payload.azp}`,
    //   refToken,
    //   EXP,
    // );
    await this.authRedisService.store(`${payload.sub}`, refToken, EXP);
    return refToken;
  }

  public async signAccessToken(user: UserEntity): Promise<string | undefined> {
    const NOW_SECONDS = Math.round(Number(new Date()) / 1000);
    // const conf = this.configService.get<IJwtConfig>(JWT_CONFIG);
    const conf = this.configService.get('jwt');
    // const _sysConf = await this.globalConfigService.getConfigByKey<AuthConfigDto>('auth');
    // const sysConf = plainToInstance(AuthConfigDto, _sysConf as object, {
    //   enableImplicitConversion: true,
    // });

    // console.log('sysConf..', sysConf, typeof sysConf);
    // const EXP = sysConf ? sysConf['accessTokenLifespan'] : 3600;
    const EXP = 10;
    console.log('exp..', EXP);
    console.log('NOW_SECONDS..', NOW_SECONDS);
    const exp = new Decimal(NOW_SECONDS).plus(EXP).toNumber();
    const payload: AccessTokenPayload = {
      sub: user.id.toString(),
      name: user?.firstName + ' ' + user?.lastName,
      // phone: user.phone,
      email: user.email,
      role: user.role,
      exp,
      iat: NOW_SECONDS,
      typ: 'Bearer',
      // iss: this.issuer,
    };

    // add patientId to the payload if the user that is
    // being created is a patient
    // if (payload.role === USER_ROLE.PATIENT) {
    //   payload.patientId = user?.patientId;
    // }

    return this.jwtService.signAsync(payload, {
      // privateKey: conf.accessPrivateKey.replace(/\\n/g, '\n'),
      privateKey: conf.privateKey,
      algorithm: 'ES256',
      keyid: 'fec6c706-bd06-4172-a405-a1fef21f070a',
    });
  }

  public async createTokenPair(
    user: UserEntity,
  ): Promise<TokensDto | undefined> {
    const [accessToken, refreshToken] = await Promise.all([
      this.signAccessToken(user),
      this.signRefreshToken(user),
    ]);
    // Logger.log({
    //   message: '[accessToken, refreshToken]',
    //   meta: { access_token: accessToken, refresh_token: refreshToken },
    //   context: TokenService.name,
    // });

    return {
      access_token: accessToken || '',
      refresh_token: refreshToken || '',
    };
  }

  public async verifyAccessToken(
    accessToken: string,
  ): Promise<AccessTokenPayload | undefined> {
    Logger.log(`From Auth Guard: ${accessToken}`);

    try {
      if (!accessToken) {
        return;
      }
      // const conf = this.configService.get<IJwtConfig>(JWT_CONFIG);
      const conf = this.configService.get('jwt');
      const result = await this.jwtService.verifyAsync<AccessTokenPayload>(
        accessToken,
        {
          publicKey: conf.publicKey.replace(/\\n/g, '\n'),
          // publicKey: conf.publicKey,
          algorithms: ['ES256'],
          ignoreExpiration: false,
        },
      );
      return result;
    } catch (error) {
      Logger.error({
        message: `verifyAccessToken failed`,
        stack: error,
        context: TokenService.name,
      });
      return;
    }
  }

  public async decodeRefreshToken(
    refreshToken: string,
  ): Promise<RefreshTokenPayload | undefined> {
    const refPayload: RefreshTokenPayload = (await this.jwtService.decode(
      refreshToken,
      {
        json: true,
      },
    )) as RefreshTokenPayload;

    Logger.log(`Decoded Refresh Token => ${JSON.stringify(refPayload)}`);

    return refPayload;
  }

  public async validRefreshToken(
    refreshToken: string,
  ): Promise<TokensDto | undefined> {
    const refPayload: RefreshTokenPayload | undefined =
      await this.decodeRefreshToken(refreshToken);
    console.log('refPayload', refPayload);

    if (!refPayload) {
      // trhow error...
      Logger.error({
        message: `Invalid or expired refresh token provided`,
        stack: { refPayload, refreshToken },
        context: TokenService.name,
      });

      throw new HttpException(
        `Invalid or expired refresh token provided.`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const refTokenKey = `${refPayload.sub}`;
    Logger.log({
      message: 'refreshToken',
      meta: refreshToken,
      context: TokenService.name,
    });
    Logger.log({
      message: 'refTokenKey',
      meta: refTokenKey,
      context: TokenService.name,
    });

    const data = await this.authRedisService.get(refTokenKey);
    // Logger.log({ message: '{ data }', meta: { data }, context: TokenService.name });
    const refresh_token = data;
    // Logger.log({ message: 'refresh_token', meta: refresh_token, context: TokenService.name });
    if (!refresh_token || refresh_token !== refreshToken) {
      // throw error...
      Logger.error({
        message: `Invalid or expired refresh token provided`,
        stack: { refPayload, refreshToken },
        context: TokenService.name,
      });
      throw new HttpException(
        `Invalid or expired refresh token provided.`,
        HttpStatus.UNAUTHORIZED,
      );
    }
    const user = await this.getUserService.getBy({
      id: Number(refPayload?.sub),
      role: refPayload?.role as UserRole,
    });

    // return this.createTokenPair(user?.data);
    if (user?.data !== null && user?.data !== undefined) {
      return this.createTokenPair(user?.data);
    }
  }

  public async logoutRefreshToken(
    refreshToken: string,
  ): Promise<void | undefined> {
    const refPayload: RefreshTokenPayload = (await this.jwtService.decode(
      refreshToken,
      {
        json: true,
      },
    )) as RefreshTokenPayload;

    if (!refPayload) {
      // trhow error...
      Logger.error({
        message: `Invalid or expired refresh token provided`,
        stack: { refPayload, refreshToken },
        context: TokenService.name,
      });
      throw new HttpException(
        `Invalid or expired refresh token provided.`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const refTokenKey = `${refPayload.sub}`;
    await this.authRedisService.delete(refTokenKey);
    return;
  }
}
