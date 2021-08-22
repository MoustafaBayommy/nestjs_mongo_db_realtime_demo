
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({timestamps:true})
export class Notification  {
  @Prop({required:true})
  user: number;

  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop({default:false})
  seen: boolean;

  @Prop({default:''})
  action: string;
}


export const NotificationSchema = SchemaFactory.createForClass(Notification);

