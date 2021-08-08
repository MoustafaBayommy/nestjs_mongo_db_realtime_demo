
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop({required:true})
  user: number;

  @Prop()
  title: number;

  @Prop()
  body: string;

  @Prop({default:''})
  action: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);