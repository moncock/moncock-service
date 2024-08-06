import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection, CollectionSchema } from './schemas/moncock.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the module global, no need to import in other modules
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `${configService.get<string>('MONCOCK_DB')}/${configService.get<string>('MONCOCK_DB_NAME')}`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),    MongooseModule.forFeature([{ name: Collection.name, schema: CollectionSchema , collection : "collection"  }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
