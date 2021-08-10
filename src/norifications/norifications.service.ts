import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { NotificationDto } from './notification.dto';
import { Notification, NotificationDocument } from './Notification.schema';

@Injectable()
export class NorificationsService {

  constructor(@InjectModel(Notification.name) private model: Model<NotificationDocument>,@InjectConnection() private connection: Connection) {
    model.watch().on('change',  console.log);
  }


  async save(dto:NotificationDto):Promise<Notification>{
    const createdNotification=new this.model(dto);
    return createdNotification.save();
  }


  async findAll(): Promise<Notification[]> {
    return this.model.find().exec();
  }

}
