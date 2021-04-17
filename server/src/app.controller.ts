import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/message')
  getMessage(): string {
    const messages = this.appService.getMessages();
    console.log(messages);
    return messages;
  }

  @Post('/message')
  postMessage(@Body() body: Body): string {
    console.log(body);
    return 'ok';
  }
}
