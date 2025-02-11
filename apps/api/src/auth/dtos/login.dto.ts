// import {
//   BadRequestException,
//   Logger,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Type } from 'class-transformer';
// import {
//   IsString,
//   IsNumber,
//   Min,
//   Max,
//   IsNotEmpty,
//   IsOptional,
// } from 'class-validator';
// import {
//   DetailResponse,
//   ERROR_RESET_CREDENTIAL,
//   ERROR_VERIFY_OTP,
// } from 'src/common';
// import { isEmailValid, parsePhone } from 'src/common/utils';
// // import { User, UserAccess, UserAccessStatusEnum, UserStatusEnum } from 'src/modules';
// import * as bcrypt from 'bcrypt';
// import { UserEntity, UserAccessEntity } from 'src/database/entities';

// /**
//  * LoginPayload class is used to process the login request and check if the user exists, user access exists, and user status is valid.
//  * It also checks if the account is verified, credential set is valid, and credential matches.
//  * It processes the user login and returns the result of the login process.
//  */
// export class LoginPayload {
//   private _identifier?: string;
//   private _credential?: string;

//   private _userId?: number;
//   private _role?: string;
//   private _phone?: string;
//   private _email?: string;
//   private _username?: string;

//   private _user: UserEntity;
//   private _userAccess: UserAccessEntity;

//   constructor(dto: PinLoginDto | PasswordLoginDto) {
//     if ('pinCode' in dto) {
//       const { phone, pinCode } = dto;
//       const parsedPhone = parsePhone(phone.trim());
//       if (!parsedPhone.valid) {
//         throw new BadRequestException('Invalid phone number');
//       }
//       this._phone = parsedPhone.number.e164.replace('+', '');
//       this._identifier = `${this._phone}`;
//       this._credential = `${pinCode}`;
//     } else {
//       const { identifier, password } = dto;
//       const validEmail = isEmailValid(identifier.trim());
//       const parsedPhone = parsePhone(identifier.trim());

//       if (!parsedPhone.valid && !validEmail) {
//         this._username = identifier.trim();
//         this._identifier = this._username;
//         //throw new UnauthorizedException(`Value '${identifier}' is not valid email or phone number`);
//       }
//       if (validEmail) {
//         this._email = identifier.trim();
//         this._identifier = this._email;
//       } else if (parsedPhone.valid) {
//         this._phone = parsedPhone.number.e164.replace('+', '');
//         this._identifier = this._phone;
//       }
//       // this._password = password;
//       this._credential = `${password}`;
//     }
//   }

//   public async processUserLogin(
//     user: UserEntity,
//   ): Promise<DetailResponse<string>> {
//     this._user = user;
//     this._userAccess = user?.userAccesses.find((_) => true);

//     this.userExists();
//     this.userAccessExists();
//     this.isValidUserStatus();

//     const isVerified = this.isAccountVerified();
//     const doesCredMatch = await this.doesCredentialMatch();

//     if (!isVerified.success && doesCredMatch.success) {
//       return isVerified;
//     }
//     if (!doesCredMatch.success) {
//       return doesCredMatch;
//     }

//     return new DetailResponse('valid');
//   }

//   public getRequestDto() {
//     return {
//       phone: this._phone,
//       email: this._email,
//       username: this._username,
//       userId: this._userId,
//     };
//   }

//   private userExists() {
//     if (!this._user) {
//       throw new UnauthorizedException(
//         '1-Invalid Account Access Detail(s) provided',
//       );
//     }
//   }

//   private userAccessExists() {
//     if (!this._userAccess) {
//       throw new UnauthorizedException(
//         `Account not registered for the service.`,
//       );
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

//   private async doesCredentialMatch() {
//     const { secretHash, tempSecretHash } = this._userAccess;

//     const isMatchingPassword =
//       secretHash && (await bcrypt.compare(this._credential, secretHash));
//     const isMatchingTempPassword =
//       tempSecretHash &&
//       (await bcrypt.compare(this._credential, tempSecretHash));

//     if (!isMatchingPassword && !isMatchingTempPassword) {
//       // throw new UnauthorizedException('2-Invalid Account Access Detail(s) provided');
//       return new DetailResponse(
//         { identifier: this._identifier },
//         `2-Invalid Account Access Detail(s) provided`,
//         false,
//         401,
//       );
//     }

//     Logger.log(
//       `isMatchingPassword: ${isMatchingPassword} | isMatchingTempPassword: ${isMatchingTempPassword}`,
//     );
//     if (!isMatchingPassword && isMatchingTempPassword) {
//       Logger.debug(
//         `isMatchingPassword: ${isMatchingPassword} | isMatchingTempPassword: ${isMatchingTempPassword}`,
//       );
//       if (
//         ['PENDING'].includes(this._user.status) ||
//         ['PENDING'].includes(this._userAccess.status)
//       ) {
//         return new DetailResponse(
//           { identifier: this._identifier },
//           `Account not verified. Please verify and activate your account access`,
//           false,
//           ERROR_VERIFY_OTP,
//         );
//       }
//       return new DetailResponse(
//         { identifier: this._identifier },
//         `-Account access credential reset required`,
//         false,
//         ERROR_RESET_CREDENTIAL,
//       );
//     }
//     return new DetailResponse(null);
//   }

//   public isAccountVerified() {
//     if (
//       ['PENDING'].includes(this._user.status) ||
//       ['PENDING'].includes(this._userAccess.status)
//     ) {
//       return new DetailResponse(
//         { identifier: this._identifier },
//         `Account not verified. Please verify and activate your account access`,
//         false,
//         ERROR_VERIFY_OTP,
//       );
//     }
//     return new DetailResponse(null);
//   }
// }

// /**
//  * PasswordLoginDto class is used to validate the login request payload for password login.
//  */
// export class PasswordLoginDto {
//   @IsString()
//   @Type(() => String)
//   identifier: string;

//   @IsString()
//   @IsNotEmpty()
//   @IsOptional()
//   @Type(() => String)
//   password?: string;
// }

// /**
//  * PinLoginDto class is used to validate the login request payload for pin login.
//  */
// export class PinLoginDto {
//   @IsString()
//   @Type(() => String)
//   phone: string;

//   @IsNumber()
//   @Type(() => Number)
//   @Min(0)
//   @Max(9999)
//   pinCode: number; // is similar to otpCode
// }
