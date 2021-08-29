import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationDto } from './notification.dto';
import { Notification, NotificationDocument } from './Notification.schema';
import { NotificationsGatway } from './notifications.gateway';
@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notification.name) private model: Model<NotificationDocument>,
    @Inject(forwardRef(() => NotificationsGatway))
    private readonly gatway: NotificationsGatway,
  ) {
    this.watchForNewNotifications();
  }

  async save(dto: NotificationDto): Promise<Notification> {
    const createdNotification = new this.model(dto);
    return createdNotification.save();
  }

  async findAll(): Promise<Notification[]> {
    return this.model
      .find()
      .limit(10)
      .sort({ createAt: 'asc' })
      .exec();
  }

  private watchForNewNotifications() {
    this.model.watch().on('change', change => {
      if (change.operationType == 'insert') {
        this.gatway.server.emit('new', change.fullDocument);
      }
    });
  }
}
