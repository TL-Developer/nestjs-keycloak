import { Controller, Post, Body, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from 'nest-keycloak-connect';
import { HttpStatusCode } from 'axios';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @Public()
  async login(@Response() response, @Body() loginDto: LoginDto) {
    try {
      const result = await this.authService.login(loginDto);

      return response.status(HttpStatusCode.Ok).send(result);
    } catch (error) {
      console.log(error);
    }
  }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }
}
