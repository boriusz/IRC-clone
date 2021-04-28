import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { Model } from 'mongoose';
import { MessageDto } from './dto/message.dto';

let counter = 0;
@Injectable()
export class AppService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async getMessages(
    lastMessageId: string,
  ): Promise<{ messages: Message[]; lastId: string }> {
    const messages = await this.messageModel.find().exec();
    if (lastMessageId == 'null') {
      return {
        messages: [],
        lastId: messages[messages.length - 1]._id ?? null,
      };
    }
    const data = await this.findNewestMessages(lastMessageId);
    if (data) {
      return data;
    }
    return await this.waitForDataChange(lastMessageId);
  }

  async addMessage(messageDto: MessageDto): Promise<Message> {
    messageDto.time = new Date(Date.now());
    const addedMessage = new this.messageModel(messageDto);
    return await addedMessage.save();
  }

  async waitForDataChange(
    lastMessageId: string,
  ): Promise<{ messages: Message[]; lastId: string }> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        console.log(counter++);
        resolve({ messages: [], lastId: lastMessageId });
      }, 1000 * 10);
      let interval = setInterval(async () => {
        const data = await this.findNewestMessages(lastMessageId);
        if (data) {
          clearInterval(interval);
          resolve(data);
        }
      }, 100);
    });
  }

  async findNewestMessages(
    lastMessageId: string,
  ): Promise<{ messages: Message[]; lastId: string } | null> {
    const messages = await this.messageModel.find().exec();
    if (messages.length === 0) return null;
    if (messages[messages.length - 1]._id != lastMessageId) {
      const indexOfLastSeenMessage = messages.findIndex(
        (item) => item._id == lastMessageId,
      );
      const messagesToSend = messages.slice(
        indexOfLastSeenMessage + 1,
        messages.length,
      );
      return {
        messages: messagesToSend,
        lastId: messages[messages.length - 1]._id,
      };
    }
    return null;
  }
}
