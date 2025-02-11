import { UserAccessStatus } from '@session-artist/shared';

export interface IUserAccessEntity {
  userId: number;
  otpCode: number;
  secretHash: string;
  tempSecretHash: string;
  emailActivationToken: string;
  status: UserAccessStatus;
}
