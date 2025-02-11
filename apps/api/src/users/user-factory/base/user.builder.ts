import { BadRequestException } from '@nestjs/common';
import { UserAccessBuilder } from './user-access.builder';
import { ICredentials } from '../../interfaces';
import { UserEntity } from '@apps/api/database/entities';
import { USER_ACCESS_STATUS, UserRole, UserStatus } from '@apps/api/common';
// import { IAccountSMS } from 'src/notification/dto';

export class UserBuilder {
  private user: UserEntity;
  private credentials: ICredentials;

  constructor() {
    this.user = new UserEntity({
      status: USER_ACCESS_STATUS.PENDING,
      userAccesses: [],
    });
  }

  setRole(role: UserRole): this {
    this.user.role = role;
    return this;
  }

  setUsername(username: string): this {
    this.user.username = username;
    return this;
  }

  setEmail(email: string): this {
    this.user.email = email;
    return this;
  }

  setPhoneNumber(phoneNumber: string): this {
    this.user.phone = phoneNumber;
    return this;
  }

  setStatus(status: UserStatus): this {
    this.user.status = status;
    return this;
  }

  async addUserAccess(): Promise<this> {
    // addUserAccess(channels: ('WEB' | 'APP')): this {
    const uaBuilder = new UserAccessBuilder();
    const userAccess = await uaBuilder.build();
    this.user.userAccesses.push(userAccess);
    // this.credentials.push(uaBuilder.getCredentials());
    this.credentials = uaBuilder.getCredentials();
    return this;
  }

  // build method
  build(): UserEntity {
    const { phone: phoneNumber, email } = this.user;
    if (!phoneNumber || !email) {
      throw new BadRequestException('Phone number or email are required');
    }
    return this.user;
  }

  // notification method
  // getNotificationDetails(userId: number): IAccountSMS {
  getNotificationDetails(userId: number): any {
    const _credentials = this.credentials;
    return {
      userId,
      name: this.user.username,
      subject: 'OTP Verification',
      message: `Your OTP is ${_credentials.otpCode}`,
      destination: this.user.phone,
      otpCode: _credentials.otpCode,
      password: _credentials.password,
    };
  }
}
