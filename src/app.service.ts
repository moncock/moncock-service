import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection, CollectionDocument } from './schemas/moncock.schema';


@Injectable()
export class AppService {
  constructor(@InjectModel(Collection.name) private moncockModel: Model<CollectionDocument>) {}

  //event
  async event(): Promise<Collection> {
    const createdCat = new this.moncockModel({name : "ww",age: 20,breed : "11"});
    return createdCat.save();
  }
   //collection
   async collection(): Promise<CollectionDocument[]> {
    console.log("this.moncockModel.find().exec()",this.moncockModel.find().exec())
    return await this.moncockModel.find().exec();
  }
  //meme
  async meme(): Promise<string[]> {
    return ['Get Meme1','Get Meme2','Get Meme3'];
  }
}
