import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpService) {}

  async login(loginDto: LoginDto) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://host.docker.internal/realms/advisor/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest',
          client_secret: '7aqOgutllKPKUpk47fKzCos83sF0aKWq',
          username: loginDto.username,
          password: loginDto.password,
          grant_type: 'password',
        }),
      ),
    );

    return data;
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }
}
