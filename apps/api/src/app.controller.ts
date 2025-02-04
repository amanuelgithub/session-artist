import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { add } from '@session-artist/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('sum of 2 numbers: ', add(1, 2));
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
