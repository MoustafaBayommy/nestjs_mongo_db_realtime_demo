import { Body, Controller, Post } from '@nestjs/common';
import { NorificationsService } from './norifications.service';
import { NotificationDto } from './notification.dto';

@Controller('notifications')
export class NotificationsController {

      constructor(private readonly service:NorificationsService){

      }

      @Post()
      create(@Body() dto:NotificationDto){
           return  this.service.save(dto);
      }
}
