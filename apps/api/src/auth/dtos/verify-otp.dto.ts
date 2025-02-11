// import { UnauthorizedException } from '@nestjs/common';
// import { Type } from 'class-transformer';
// import { IsNumber, IsString, Max, Min } from 'class-validator';
// import {
//   USER_ACCESS_STATUS,
//   USER_STATUS,
//   isEmailValid,
//   parsePhone,
// } from 'src/common';
// import { UserAccessEntity, UserEntity } from 'src/database/entities';

// export class VerifyOtpDto {
//   @IsString()
//   identifier: string;

//   @IsNumber()
//   @Type(() => Number)
//   @Min(100000)
//   @Max(999999)
//   otp: number;
// }
// export class VerifyOtpPayload {
//   private _phone: string;
//   private _email: string;
//   private _otp: number;

//   // target user
//   private _userAccess: UserAccessEntity;
//   private _user: UserEntity;

//   constructor(dto: VerifyOtpDto) {
//     const { otp, identifier } = dto;
//     const validEmail = isEmailValid(identifier.trim());
//     const parsedPhone = parsePhone(identifier.trim());
//     if (!parsedPhone.valid && !validEmail) {
//       throw new UnauthorizedException(
//         `Value '${identifier}' is not valid email or phone number`,
//       );
//     }
//     if (validEmail) {
//       this._email = identifier.trim();
//     }
//     if (parsedPhone.valid) {
//       this._phone = parsedPhone.number.e164.replace('+', '');
//     }
//     this._otp = otp;
//   }

//   private userExists() {
//     if (!this._user) {
//       throw new UnauthorizedException(`Account not registered for the service`);
//     }
//   }
//   private userAccessExists() {
//     if (!this._userAccess) {
//       throw new UnauthorizedException(`Account not registered for the service`);
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
//   private isVerificationRequested() {
//     const { otpCode } = this._userAccess;
//     if (!otpCode) {
//       throw new UnauthorizedException(
//         `No OTP verification requested or OTP already verified`,
//       );
//     }
//   }
//   private doesOTPVerifyCodeMatch() {
//     const { otpCode } = this._userAccess;

//     if (otpCode !== this._otp) {
//       console.log(
//         `Invalid OTP with username OTP: ${this._otp} OTP_CODE: '${otpCode}' Phone: '${this._phone}' `,
//       );
//       throw new UnauthorizedException('Invalid OTP verification code');
//     }
//   }

//   public getRequestDto() {
//     // return { phone: this._phone, email: this._email, realm: this._requestInfo.realm };
//     return { phone: this._phone, email: this._email };
//   }

//   public async isValidOTPVerification(
//     user: UserEntity,
//   ): Promise<boolean | undefined> {
//     this._user = user;
//     this._userAccess = user?.userAccesses[0]; // because their is only WEB

//     this.userExists();
//     this.userAccessExists();
//     this.isValidUserStatus();
//     this.isVerificationRequested();
//     this.doesOTPVerifyCodeMatch();
//     return true;
//   }

//   public getVerifiedUserDetail(): UserEntity {
//     this._userAccess.status = USER_ACCESS_STATUS.ACTIVE;
//     this._user.status = USER_STATUS.ACTIVE;

//     this._userAccess.otpCode = null;
//     this._user.userAccesses = [...this._user.userAccesses, this._userAccess];
//     return this._user;
//   }
// }
