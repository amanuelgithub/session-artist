import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { add } from '@session-artist/shared';
import { Public } from './common/decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('sum of 2 numbers: ', add(1, 2));
  }

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
