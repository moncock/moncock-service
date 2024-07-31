import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Moncock, CatDocument } from './schemas/moncock.schema';


@Injectable()
export class AppService {
  constructor(@InjectModel(Moncock.name) private moncockModel: Model<CatDocument>) {}

  //event
  async event(): Promise<Moncock> {
    const createdCat = new this.moncockModel({name : "ww",age: 20,breed : "11"});
    return createdCat.save();
   
  }
   //collection
  async collection(): Promise<string[]>{
    return ['Get Collection1','Get Collection2','Get Collection3'];
  }
  //meme
  async meme(): Promise<string[]> {
    return ['Get Meme1','Get Meme2','Get Meme3'];
  }
}
