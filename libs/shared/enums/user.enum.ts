import { EnumValues } from './enum-type';
// user
export const USER_ROLE = {
  CUSTOMER: 'CUSTOMER',
  ARTIST: 'ARTIST',
  ADMIN: 'ADMIN',
} as const;
export type UserRole = EnumValues<typeof USER_ROLE>;

// user status
export const USER_STATUS = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  SUSPENDED: 'SUSPENDED',
} as const;
export type UserStatus = EnumValues<typeof USER_STATUS>;

// user access
export const USER_ACCESS_STATUS = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  SUSPENDED: 'SUSPENDED',
  VERIFIED: 'VERIFIED',
} as const;
export type UserAccessStatus = EnumValues<typeof USER_ACCESS_STATUS>;

export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const;
export type Gender = EnumValues<typeof GENDER>;
