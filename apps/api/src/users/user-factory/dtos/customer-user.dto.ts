import {
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class RegisterCustomerUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  lastName?: string;

  @IsString()
  @MinLength(5, {
    message:
      'username is too short. At least, it should be $constraint1 characters, but actual is $value',
  })
  @IsNotEmpty()
  @IsOptional()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email: string;

  // password
  // @IsPasswordValid()
  // @MinLength(6)
  // @MaxLength(127)
  // @IsString()
  // @IsNotEmpty()
  // password: string;
}
