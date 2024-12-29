import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('helloww-hotfix!!');
    return 'Hello World!';
  }
}
