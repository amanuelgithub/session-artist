import { Role } from '../../enums';

export interface IUser {
  id: number;
  phone?: string;
  email: string;
  passwordHash: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
