import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CollectionDocument = Collection & Document;

@Schema()
export class Collection {
  @Prop()
  artist: string;

  @Prop()
  url: string;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);