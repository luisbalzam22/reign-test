import {
  Controller,
  Get,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { PostsService } from './posts.service';
import { normalizePosts } from './helpers/normalize-posts';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Interval(360000) //It'll fetch new data from the API every hour
  async fetchEveryHour() {
    const test = (await this.postsService.refreshData()).toPromise();
    test.then(({ hits }) => {
      const posts = normalizePosts(hits);
      posts.forEach((post) => {
        this.postsService.createPost(post);
      });
    });
  }

  @Get('/')
  async getPosts(@Res() res) {
    const posts = await this.postsService.getPosts();
    return res.json({ posts });
  }

  @Delete('/delete')
  async deletePost(@Res() res, @Query('postid') postID) {
    const deletedPost = await this.postsService.deletePost(postID);
    if (!deletedPost) {
      throw new NotFoundException('Story does not exist already');
    }
    return res.status(HttpStatus.OK).json({ deletedPost });
  }

  @Get('/refresh')
  async refreshData(@Res() res) {
    const test = (await this.postsService.refreshData()).toPromise();
    const test2 = await test.then(({ hits }) => {
      const posts = normalizePosts(hits);
      posts.forEach((post) => {
        this.postsService.createPost(post);
      });
      return posts;
    });
    return res.json(test2);
  }
}
