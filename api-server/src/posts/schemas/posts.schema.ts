import { Schema } from 'mongoose';

export const PostsSchema = new Schema({
  objectID: String,
  title: String,
  author: String,
  url: String,
  creationDate: Date,
  unwanted: Boolean,
});
