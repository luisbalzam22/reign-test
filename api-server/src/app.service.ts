import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to nest-api-server (go to /posts to start fetching data)';
  }
}
