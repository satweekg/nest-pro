import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string }) {
    return this.userService.createUser(body.name, body.email, body.password);
  }


  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
