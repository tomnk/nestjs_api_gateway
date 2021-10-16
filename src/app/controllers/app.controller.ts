import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health-check')
  async getApp(): Promise<string> {
    return 'OK';
  }

  @Get('/ping-a')
  pingServiceA() {
    return this.appService.pingServiceA();
  }
}
