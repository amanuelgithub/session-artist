// import { UserAccess } from '@app/db';
// import { CHANNEL, generateSecret } from '@app/shared';
import * as bcrypt from 'bcrypt';
// import { ICredentials } from '../interfaces';
// import { USER_ACCESS_STATUS, generateSecret } from 'src/common';
import { ICredentials } from '../../interfaces';
import { UserAccessEntity } from '@apps/api/database/entities';
import { USER_ACCESS_STATUS, generateSecret } from '@apps/api/common';
// import { UserAccessEntity } from 'src/database/entities';

export class UserAccessBuilder {
  private userAccess: UserAccessEntity;

  private otpCode?: number; // OTP Verfification - Verify Phone
  // private pinCode?: number; // PIN Auth - Set By User
  private password?: string; // Pass Auth - Set By User

  constructor() {
    this.userAccess = new UserAccessEntity({
      status: USER_ACCESS_STATUS.PENDING,
    });
    this.otpCode = Math.floor(100000 + Math.random() * 900000);
    this.userAccess.otpCode = this.otpCode;
    // this.userAccess.accessChannel = accessChannel;
  }
  // setDeviceUuid(value: string): this {
  //   this.userAccess.deviceUuid = value;
  //   return this;
  // }

  private async setPassword(value?: string): Promise<void> {
    this.password = value ? value : generateSecret(6);
    const hash = await bcrypt.hash(this.password, 12);

    // if (value) {
    this.userAccess.secretHash = hash;
    // } else {
    this.userAccess.tempSecretHash = hash;
    // }
    // this.userAccess.accessChannel = CHANNEL.WEB;
  }

  // private async setPinCode(value?: number): Promise<void> {
  //   this.pinCode = typeof value !== 'undefined' ? value : Math.floor(1000 + Math.random() * 9000);
  //   const hash = await bcrypt.hash(`${this.pinCode}`, 12);
  //   if (value) {
  //     this.userAccess.secretHash = hash;
  //   } else {
  //     this.userAccess.tempSecretHash = hash;
  //   }
  //   this.userAccess.accessChannel = CHANNEL.APP;
  // }

  getCredentials(): ICredentials {
    return {
      // channel: this.userAccess?.accessChannel,
      otpCode: this.otpCode,
      password: this.password,
      // pinCode: this.pinCode,
    };
  }

  async build(): Promise<UserAccessEntity> {
    // this.userAccess?.accessChannel === 'WEB' ? await this.setPassword() : await this.setPinCode();
    await this.setPassword();
    return this.userAccess;
  }
}
