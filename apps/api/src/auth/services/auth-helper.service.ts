import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { TokenService } from './token.service';

@Injectable()
export class AuthHelperService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly conf: ConfigService,
  ) {}

  public async getRefreshTokenCookie(refreshToken: string, req: Request) {
    const decodedToken =
      await this.tokenService.decodeRefreshToken(refreshToken);
    if (!decodedToken) {
      throw new HttpException('Invalid refresh token', 401);
    }
    const { exp } = decodedToken;

    // const baseURL = req.protocol + '://' + req.headers.host + '/';
    // const baseURL = req.protocol + '://' + req.headers.host + '/';
    const baseURL = req.protocol + '://' + req.headers.origin + '/';
    console.log('baseURL', baseURL);
    console.log('req.headers.host', req.headers.host);
    console.log('req.headers.origin', req.headers.origin);
    const parsedURL = new URL(req.url, baseURL);
    // const domain = '.some.et'; // parsedURL.hostname;
    const secure = parsedURL.protocol === 'https:';
    const expires = new Date(0).setUTCSeconds(exp);
    return `ref_token=${refreshToken}; expires='${expires}'; httpOnly=true; signed:true; Secure=${secure}; SameSite=None;`;
    // return `ref_token=${refreshToken}; expires='${expires}'; httpOnly=true; Secure=${secure}; SameSite=Lax; domain=${domain}; path=/`;
  }

  public getLogoutRefreshTokenCookie(req: Request) {
    const baseURL = req.protocol + '://' + req.headers.host + '/';
    const parsedURL = new URL(req.url, baseURL);
    // const domain = parsedURL.hostname;
    const secure = parsedURL.protocol === 'https:';
    const expires = new Date(0).setUTCSeconds(0);

    // res?.clearCookie('ref_token', { signed: true, httpOnly: true, sameSite: 'none', secure });

    return `ref_token=''; expires='${expires}'; httpOnly=true; signed:true; Secure=${secure}; SameSite=None;`;
    // return `ref_token=''; expires='${expires}'; httpOnly=true; Secure=${secure}; SameSite=Lax; domain=${domain}; path=/`;
  }
}
