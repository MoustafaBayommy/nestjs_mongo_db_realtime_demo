import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  assignee: number;

  @Prop()
  title: string;

  @Prop()
  details: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
