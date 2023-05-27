import {
  Body,
  Controller,
  Post,
  Req,
} from '@nestjs/common';
import { AuthDto } from './dto';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({
      dto,
    });
    return this.authService.signin();
  }

  @Post('signin')
  signin() {
    return this.authService.signup();
  }
}
