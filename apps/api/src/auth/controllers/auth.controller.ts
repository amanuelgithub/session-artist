import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { Public } from '@apps/api/common/decorators';
import {
  AuthCommonService,
  AuthHelperService,
  TokenService,
} from '../services';
import { RefreshTokenDto } from '../dtos';
import { GoogleAuthGuard } from '../guards/google-auth.guard';
// import { AuthService } from './auth.service';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly authCommonService: AuthCommonService,
    private readonly helper: AuthHelperService,
  ) {}

  // // self registration
  // @Post('register')
  // @Public()
  // @HttpCode(HttpStatus.CREATED)
  // // @Throttle({ default: { limit: 10, ttl: 60000 } })
  // // @UseGuards(AppThrottlerGuard)
  // async selfRegister(@Body() dto: RegisterPatientUserDto) {
  //   const builder = UserFactory.get({ ...dto, role: USER_ROLE.PATIENT });
  //   const user = await this.createPatientService.createUser(builder);
  //   const smsPayload = builder.getNotificationDetail(user.id);
  //   Logger.log(
  //     `User ${user} registered successfully \n. SMS Payload: ${JSON.stringify(smsPayload)}`,
  //   );
  //   // await this.notify.sendAuthSMS(smsPayload);
  //   // await this.notify.sendWelcomeEmail(user, smsPayload.otpCode, smsPayload.password);
  //   return new DetailResponse('registration successful');
  // }

  // // login
  // @Post('login')
  // @HttpCode(HttpStatus.OK)
  // @Public()
  // async login(
  //   @Body() dto: PasswordLoginDto,
  //   @Req() req,
  //   @Res({ passthrough: true }) res: Response,
  // ) {
  //   const payload = new LoginPayload(dto);
  //   const result = await this.loginService.login(payload);
  //   if (result && result.success) {
  //     // Logger.log({ message: 'loginResult', meta: result, context: PatientAuthController.name });
  //     const { refresh_token, access_token } =
  //       await this.tokenService.createTokenPair(result.data['user']);
  //     // Logger.log(`Login successful. Access Token: ${access_token} \n Refresh Token: ${refresh_token}`);

  //     if (refresh_token) {
  //       const refresh_cookie = await this.helper.getRefreshTokenCookie(
  //         refresh_token,
  //         req,
  //       );
  //       Logger.log(`Refresh Cookie: ${refresh_cookie}`);
  //       res.setHeader('set-cookie', refresh_cookie);
  //     }
  //     return {
  //       access_token,
  //       success: true,
  //       statusCode: 200,
  //       message: 'Login successful',
  //     };
  //   }
  //   return result;
  // }

  // login
  @Post('login')
  @Public()
  login() {
    return;
  }
  // register
  // @Post('register')
  // register() {
  //   return;
  // }
  // logout
  @Post('logout')
  logout() {
    return;
  }
  // profile - protected route
  @Get('profile')
  profile() {
    return;
  }
  // refresh token - used to get new access token & refresh token
  @Post('refresh')
  @Public()
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @Body() dto: RefreshTokenDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      dto.refreshToken = req.cookies?.ref_token ?? dto.refreshToken;
      console.log('refresh token hit - token: ', req.cookies);

      const result = await this.authCommonService.refreshAccessToken(dto);

      if (!result) {
        throw new HttpException(
          'Invalid refresh token',
          HttpStatus.UNAUTHORIZED,
        );
      }
      const { refresh_token, access_token } = result;

      if (refresh_token) {
        const refresh_cookie = await this.helper.getRefreshTokenCookie(
          refresh_token,
          req,
        );
        res.setHeader('set-cookie', refresh_cookie);

        return { access_token, success: true, statusCode: 200, message: 'OK' };
      }
    } catch (error) {
      const refresh_cookie = await this.helper.getLogoutRefreshTokenCookie(req);
      res.setHeader('set-cookie', refresh_cookie);

      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          error?.message || error,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  // google oauth
  // auth/google/login - login
  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/login') // - need to the same as the one that should be configured in the google console
  googleLogin() {
    return;
  }
  // auth/google/callback - callback
  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/callback') // - need to the same as the one that should be configured in the google console
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    const user = req.user;

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const token = await this.tokenService.createTokenPair(user as any);

    if (!token) {
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);
    }

    const { refresh_token, access_token } = token;

    console.log('generated tokens: ', { refresh_token, access_token });

    if (refresh_token) {
      console.log('refresh token: ', refresh_token);
      const refresh_cookie = await this.helper.getRefreshTokenCookie(
        refresh_token,
        req,
      );
      // res.cookie('ref_token', refresh_token, {
      //   httpOnly: true,
      //   sameSite: 'none',
      // });
      res.cookie('ref_token', refresh_cookie);
      // res.setHeader('set-cookie', refresh_cookie);
    }

    // res.redirect(`http://localhost:3000/admin?refreshToken=${refresh_token}`);
    res.redirect(`http://localhost:3000/admin`);
  }
}
