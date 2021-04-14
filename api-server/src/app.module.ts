import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    PostsModule,
    ScheduleModule.forRoot(),
    MongooseModule.forRoot('mongodb://mongo/hn-fullstack-app'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
