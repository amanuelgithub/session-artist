import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../services';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: configService.get('googleAuth')?.clientId,
      clientSecret: configService.get('googleAuth')?.clientSecret,
      callbackURL: configService.get('googleAuth')?.callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    console.log(profile?._json);

    const { name, given_name, family_name, picture, email, email_verified } =
      profile?._json;

    const googleUser = {
      firstName: given_name,
      lastName: family_name,
      avatarUrl: picture,
      email: email,
      emailVerified: email_verified,
    };

    const user = await this.authService.validateGoogleUser(googleUser);

    done(null, user); // same as - return user;
  }

  //   override validate(...args: any[]): unknown {
  //     // throw new Error('Method not implemented.');
  //     console.log('google auth values: ', args);
  //     // done(null, args[1]);
  //   }
}
