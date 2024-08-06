import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Collection, CollectionDocument } from './schemas/moncock.schema';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //get event
  @Get("get-event")
  event(): Promise<Collection> {
    return this.appService.event();
  }
  //get collection
  @Get("get-collection")
  async getCollection() {
    return await this.appService.collection()
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
