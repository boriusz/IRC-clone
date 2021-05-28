import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { MessageDto } from "./dto/message.dto";
import { Message } from "./schemas/message.schema";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/message')
  async getMessage(
    @Query('lastMessageId') lastMessageId,
  ): Promise<{ messages: Message[]; lastId: string }> {
    return await this.appService.getMessages(lastMessageId);
  }

  @Post('/message')
  async postMessage(@Body() messageDto: MessageDto): Promise<Message> {
    return await this.appService.addMessage(messageDto);
  }
}
