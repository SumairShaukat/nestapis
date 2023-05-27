import {
  IsEmail,
  IsNotEmpty,
  IsInt,
  IsString,
} from 'class-validator';
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  password: String;
}
