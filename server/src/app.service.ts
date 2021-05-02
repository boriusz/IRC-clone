import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { Model } from 'mongoose';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class AppService {
  timer = (ms: number): Promise<number> =>
    new Promise((resolve) => setTimeout(resolve, ms));

  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async getMessages(
    lastMessageId: string,
  ): Promise<{ messages: Message[]; lastId: string | null }> {
    const messages = await this.messageModel.find().exec();
    if (lastMessageId === 'null' && messages[messages.length - 1]?._id) {
      return {
        messages: [],
        lastId: messages[messages.length - 1]?._id ?? null,
      };
    }
    let data = await this.findNewestMessages(lastMessageId);
    if (data) return data;

    data = await this.waitForDataChange(lastMessageId);
    return data;
  }

  async addMessage(messageDto: MessageDto): Promise<Message> {
    const addedMessage = new this.messageModel(messageDto);
    return await addedMessage.save();
  }

  async waitForDataChange(
    lastMessageId: string,
  ): Promise<{ messages: Message[]; lastId: string }> {
    return await new Promise(async (resolve) => {
      let earlyBreak = false;
      setTimeout(() => {
        earlyBreak = true;
      }, 1000 * 10);
      while (!earlyBreak) {
        const data = await this.findNewestMessages(lastMessageId);
        if (data) {
          resolve(data);
          break;
        } else {
          await this.timer(100);
        }
      }
      resolve({ messages: [], lastId: lastMessageId });
    });
  }

  async findNewestMessages(
    lastMessageId: string,
  ): Promise<{ messages: Message[]; lastId: string } | null> {
    const messages = await this.messageModel.find().exec();
    if (messages.length === 0) return null;
    if (!messages[messages.length - 1]._id.equals(lastMessageId)) {
      const indexOfLastSeenMessage = messages.findIndex((item) =>
        item._id.equals(lastMessageId),
      );
      const messagesToSend = messages.slice(
        lastMessageId === 'null'
          ? messages.length - 1
          : indexOfLastSeenMessage + 1,
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
