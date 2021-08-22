import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from './Notification.schema';
import { NotificationsController } from './notifications.controller';
import { NotificationsGatway } from './notifications.gateway';
import { NotificationsService } from './notifications.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }])],
  providers: [NotificationsService,NotificationsGatway],
  controllers:[NotificationsController],
  exports:[NotificationsService]
})
export class NorificationsModule {}
