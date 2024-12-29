import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('test1');
    return this.appService.getHello();
  }

  @Post()
  PostHello(): string {
    console.log('test1');
    return this.appService.getHello();
  }

  @Post()
  PostHello(): string {
    console.log('test1');
    return this.appService.getHello();
  }

  @Delete()
  DeleteHello(): string {
    console.log('test1');
    return this.appService.getHello();
  }
}
