import { Body, Controller, Post } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

      constructor(private readonly service:TasksService){

      }

      @Post()
      create(@Body() dto:TaskDto){
           return  this.service.save(dto);
      }

}
