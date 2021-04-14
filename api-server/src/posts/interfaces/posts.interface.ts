import { Document } from 'mongoose';

export interface PostsInterface extends Document {
  objectID: string;
  title: string;
  author: string;
  url: string;
  creationDate: Date;
  unwanted: boolean;
}
