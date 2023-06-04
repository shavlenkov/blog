import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppDataSource} from "../data-source";
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(AppDataSource.options),
      UsersModule,
      AuthModule,
      PostsModule
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
