import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NorificationsService } from './norifications.service';
import { Notification, NotificationSchema } from './Notification.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }])],
  providers: [NorificationsService],
  exports:[NorificationsService]
})
export class NorificationsModule {}
