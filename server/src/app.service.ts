import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { Model } from 'mongoose';
import { MessageDto } from './dto/message.dto';

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
        lastId: messages[messages.length - 1]._id,
      };
    }
    const indexOfLastSeenMessage = messages.findIndex(
      (item) => item._id == lastMessageId,
    );
    if (messages[messages.length - 1]._id == lastMessageId) {
      return await this.waitForDataChange(lastMessageId);
    }
    const messagesToSend = messages.slice(
      indexOfLastSeenMessage + 1,
      messages.length,
    );
    if (messagesToSend.length === 0) {
      return this.waitForDataChange(lastMessageId);
    }
    return {
      messages: messagesToSend,
      lastId: messages[messages.length - 1]._id,
    };
  }

  async addMessage(messageDto: MessageDto): Promise<Message> {
    const addedMessage = new this.messageModel(messageDto);
    return addedMessage.save();
  }

  async waitForDataChange(
    lastMessageId: string,
  ): Promise<{ messages: Message[]; lastId: string }> {
    return await new Promise((resolve) => {
      let interval = setInterval(async () => {
        const messages = await this.messageModel.find().exec();
        if (messages[messages.length - 1]._id != lastMessageId) {
          const indexOfLastSeenMessage = messages.findIndex(
            (item) => item._id == lastMessageId,
          );
          const messagesToSend = messages.slice(
            indexOfLastSeenMessage + 1,
            messages.length,
          );
          clearInterval(interval);
          resolve({
            messages: messagesToSend,
            lastId: messages[messages.length - 1]._id,
          });
        }
      }, 10);
    });
  }
}
