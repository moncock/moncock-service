import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //get event
  @Get()
  event(): string {
    return this.appService.event();
  }
  //get collection
  @Get()
  collection(): string {
    return this.appService.collection();
  }
  //get meme
  @Get()
  meme(): string {
    return this.appService.meme();
  }
  
}
