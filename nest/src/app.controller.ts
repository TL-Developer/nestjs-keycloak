import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/advisors')
  // @Roles({ roles: ['AAI_Gerente'] })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/search')
  @Public()
  search(): string {
    return this.appService.getHello();
  }
}
