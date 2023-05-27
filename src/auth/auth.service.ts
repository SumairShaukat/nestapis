import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return {
      msg: 'herllo',
    };
  }

  signup() {
    return { msg: 'asasass' };
  }
}
