import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //event
  event(): string {
    return 'Get Event!';
  }
   //collection
  collection(): string {
    return 'Get Collection!';
  }
  //meme
  meme(): string {
    return 'Get Meme';
  }
}
