import { Injectable } from '@nestjs/common';
import { RefreshTokenDto } from '../dtos';

import { TokenService } from './token.service';

@Injectable()
export class AuthCommonService {
  constructor(private readonly tokenService: TokenService) {}

  public async refreshAccessToken(refreshDto: RefreshTokenDto) {
    const { refreshToken } = refreshDto;
    return this.tokenService.validRefreshToken(refreshToken);
  }

  public async logoutRefreshToken(refreshDto: RefreshTokenDto) {
    const { refreshToken } = refreshDto;
    await this.tokenService.logoutRefreshToken(refreshToken);
    return { success: true, statusCode: 200, message: 'Logout Successful' };
  }
}
