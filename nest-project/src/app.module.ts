import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [CatsModule, MongooseModule.forRoot(config.mongoURL)],
})
export class AppModule {}
