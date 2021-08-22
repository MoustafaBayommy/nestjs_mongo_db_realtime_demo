import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationDto } from './notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {

      constructor(private readonly service:NotificationsService){

      }

      @Post()
      create(@Body() dto:NotificationDto){
           return  this.service.save(dto);
      }

      @Get()
      getAll(){
      return this.service.findAll();
      }
}
