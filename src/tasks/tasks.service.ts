import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationsService } from 'src/norifications/notifications.service';
import { NotificationDto } from 'src/norifications/notification.dto';
import { TaskDto } from './task.dto';
import { Task,TaskDocument } from './Task.schema';
import { TasksGateway } from './tasks.gateway';

@Injectable()
export class TasksService {
      constructor( private readonly gatway:TasksGateway,
            private readonly notificationService:NotificationsService,
            @InjectModel(Task.name) private model: Model<TaskDocument> ){
                   this.watch();
      }

      async save(dto:TaskDto){

            // in real world application you will envolove that on a transaction.

            //creat task
                const task=new this.model(dto);
                  await task.save();

                  const notification:NotificationDto={
                        user:dto.assignee,
                        title:"got new task",
                        body:`${dto.details} task waiting for you `
                  };
                  //add notification
            await this.notificationService.save(notification)
      }


      findAll(){
            return this.model.find().exec();
      }

      private watch(){
            this.model.watch().on('change',  change=>{
                  this.gatway.server.emit('new',change);
                  if(change.operationType=='insert'){
                        this.gatway.server.emit('new',change.fullDocument);
                      }
                });
      }

  
}
