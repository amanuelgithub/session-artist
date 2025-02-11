import { UserRole, UserStatus } from '@apps/api/common';

export interface IUserEntity {
  role: UserRole;
  username: string;
  email: string;
  phone: string;
  status: UserStatus;
}
