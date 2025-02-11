import {
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsEmail,
} from 'class-validator';
// import { IsPasswordValid } from 'src/common';

export class RegisterArtistUserDto {
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
