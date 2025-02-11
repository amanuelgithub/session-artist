// // import { AccessDeviceEntity, UserAccessEntity, UserEntity } from '@app/db';
// // import { IAccountSMS } from '@app/notification';
// // import { IRequestInfo, isEmailValid, parsePhone } from '@app/shared';
// import { BadRequestException, UnauthorizedException } from '@nestjs/common';
// import { IsNotEmpty, IsString } from 'class-validator';
// import { isEmailValid, parsePhone } from 'src/common';
// import { UserAccessEntity, UserEntity } from 'src/database/entities';
// import { IAccountSMS } from 'src/notification/dto';

// export class ResendOtpDto {
//   @IsString()
//   @IsNotEmpty()
//   identifier: string;
// }

// export class ResendOtpPayload {
//   private _phone: string;
//   private _email: string;

//   private _otpCode?: number;
//   // private _requestInfo: IRequestInfo;

//   // target user
//   private _userAccess: UserAccessEntity;
//   private _user: UserEntity;

//   constructor(dto: ResendOtpDto) {
//     const { identifier } = dto;
//     const parsedPhone = parsePhone(identifier.trim());
//     const validEmail = isEmailValid(identifier.trim());
//     if (!parsedPhone.valid && !validEmail) {
//       throw new UnauthorizedException(`Value '${identifier}' is not valid email or phone number`);
//     }
//     if (validEmail) {
//       this._email = identifier.trim();
//     }
//     if (parsedPhone.valid) {
//       this._phone = parsedPhone.number.e164.replace('+', '');
//     }

//     this._otpCode = Math.floor(100000 + Math.random() * 900000);
//   }
//   private userExists() {
//     if (!this._user) {
//       throw new UnauthorizedException(`Account not registered for the service`);
//     }
//   }
//   private userAccessExists() {
//     if (!this._userAccess) {
//       throw new UnauthorizedException(`Account not registered for the service or channel`);
//     }
//   }

//   private isValidUserStatus() {
//     if (
//       ['BLOCKED', 'SUSPENDED'].includes(this._user.status) ||
//       ['BLOCKED', 'SUSPENDED'].includes(this._userAccess.status)
//     ) {
//       throw new UnauthorizedException(`Account is disabled or suspended`);
//     }
//   }

//   public async isValidResend(user: UserEntity): Promise<boolean | undefined> {
//     this._user = user;
//     this._userAccess = user?.userAccesses[0];

//     this.userExists();
//     this.userAccessExists();
//     this.isValidUserStatus();
//     return true;
//   }

//   public getUpdatedUserDetail(): UserEntity {
//     this._userAccess.otpCode = this._otpCode;

//     this._user.userAccesses = [...this._user.userAccesses, this._userAccess];
//     return this._user;
//   }

//   public getRequestDto() {
//     return { phone: this._phone, email: this._email };
//   }
//   public getSMSDetail(): IAccountSMS {
//     if (!this._user) {
//       throw new BadRequestException(`Could not locate user detail`);
//     }
//     return {
//       name: this._user.username,
//       destination: this._user.phone,
//       // msg: `your account registration is successful!`,
//       subject: `RESEND_OTP`,
//       otpCode: this._otpCode,
//       userId: this._user.id,
//     };
//   }
// }
