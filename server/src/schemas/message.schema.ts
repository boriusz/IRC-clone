import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ type: Date, expires: 1200, default: Date.now })
  createdAt: Date;

  @Prop()
  userName: string;

  @Prop()
  content: string;

  @Prop()
  color: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
