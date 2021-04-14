import { Module, HttpModule } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsSchema } from './schemas/posts.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Post', schema: PostsSchema }]),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
