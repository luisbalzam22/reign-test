import { Injectable, HttpService } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PostsInterface } from './interfaces/posts.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<PostsInterface>,
    private http: HttpService,
  ) {}

  async refreshData() {
    return this.http
      .get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs')
      .pipe(map((response) => response.data));
  }

  async getPost(PostID: string): Promise<PostsInterface> {
    const post = await this.postModel.findById(PostID);
    return post;
  }

  async getPosts(): Promise<PostsInterface[]> {
    const posts = await this.postModel.find({ unwanted: false });
    return posts;
  }

  async createPost(post: PostsInterface): Promise<PostsInterface> {
    const existingPost = await this.postModel.findOne({
      objectID: post.objectID,
    });
    if (
      !existingPost ||
      (existingPost && existingPost.objectID !== post.objectID)
    ) {
      const newPost = new this.postModel(post);
      return newPost.save();
    }
  }

  async deletePost(postID: string): Promise<any> {
    const deletedPost = await this.postModel.findOne({ objectID: postID });
    deletedPost.unwanted = true;
    await deletedPost.save();
    return deletedPost;
  }
  async deletePosts(): Promise<any> {
    return await this.postModel.deleteMany();
  }
}
