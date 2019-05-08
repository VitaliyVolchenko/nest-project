import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { AuthService } from './auth/auth/auth.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import config from './config/keys';

@Module({
  imports: [CatsModule, MongooseModule.forRoot(config.mongoURL), UsersModule, AuthModule],
  //providers: [AuthService],
})
export class AppModule {}
