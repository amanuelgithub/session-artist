import { EnumValues } from './enum-type';

export const ADMIN_ROlE = {
  /**
   * -- Full control of the platform, including assigning sub-admins and managing system settings.
   */
  SUPER_ADMIN: 'super_admin',
  /**
   * -- Manages user accounts (students, tutors), resolves disputes, and handles account approvals or bans.
   */
  USER_ADMIN: 'user_admin',
  /**
   * -- Manages platform content like subject categories, FAQs, blogs, and announcements.
   */
  CONTENT_ADMIN: 'content_admin',
  /**
   * -- Manages payments, refunds, commission structures, and financial reports.
   */
  FINANCE_ADMIN: 'finance_admin',
  /**
   * -- Oversees booking activity, resolves booking disputes, and monitors tutor availability.
   */
  BOOKING_ADMIN: 'booking_admin',
  /**
   * -- Handles system maintenance, troubleshooting, and monitoring server or API performance.
   */
  TECHNICAL_ADMIN: 'technical_admin',
  /**
   * -- Manages notifications, email campaigns, and automated reminders.
   */
  NOTIFICATION_ADMIN: 'notification_admin',
} as const;
// export type AdminRole = (typeof ADMIN_ROlE)[keyof typeof ADMIN_ROlE];
export type AdminRole = EnumValues<typeof ADMIN_ROlE>;

export const ROLE = {
  ...ADMIN_ROlE,
  STUDENT: 'student',
  TEACHER: 'teacher', // tutor
} as const;
// export type Role = (typeof ROLE)[keyof typeof ROLE];
export type Role = EnumValues<typeof ROLE>;
