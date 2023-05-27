import {
  IsEmail,
  IsNotEmpty,
  IsInt,
} from 'class-validator';
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsInt()
  password: number;
}
