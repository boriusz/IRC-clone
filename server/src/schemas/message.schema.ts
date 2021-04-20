import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  userName: string;

  @Prop()
  content: string;

  @Prop()
  color: string;

  @Prop()
  time: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
