import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Moncock, CatDocument } from './schemas/moncock.schema';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //get event
  @Get("get-event")
  event(): Promise<Moncock> {
    return this.appService.event();
  }
  //get collection
  @Get("get-collection")
  collection(): Promise<string[]> {
    return this.appService.collection();
  }
  //get meme
  @Get("get-meme")
  meme(): Promise<string[]>{
    return this.appService.meme();
  }

  // @Post("get-post")
  
  // bo(@Body() createItemDto: String): string {
  //   return this.appService.meme();
  // }
  
}
