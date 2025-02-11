import { UserRole } from '@apps/api/common';
import { IsOptional, IsString } from 'class-validator';

export class TokenPayload {
  // token expiry time
  exp: number;
  // time token issued at
  iat: number;
  // token type: Bearer | Refresh
  typ: string;
  // "http://localhost:8080/auth/realms/admin"
  // iss: string;
  // subject: users identity id (user's unique uuid) - exposed externally
  sub: string;
  // user role
  role: UserRole; // UserRoleEnum
}

export class RefreshTokenPayload extends TokenPayload {}
export class AccessTokenPayload extends TokenPayload {
  // user's name
  name: string;
  // user's phone no
  // phone: string;
  // phoneNumber: string;
  // users email
  email: string;

  // add other filed if necessary
  // patientId?: number;
}
export class AccessTokenDto {
  @IsString()
  accessToken: string;
}
export class RefreshTokenDto {
  @IsString()
  @IsOptional()
  refreshToken: string;
}

export class TokensDto {
  @IsString()
  access_token: string;

  @IsString()
  refresh_token: string;
}
export class TokensResponseDto {
  access_token?: string;
  refresh_token?: string;
  success: boolean;
  statusCode: number;
  message: string;
}
