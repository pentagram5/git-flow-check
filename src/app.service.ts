import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('helloww-rebase!!');
    return 'Hello World!';
  }
}
