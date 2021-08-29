import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksGateway } from './tasks.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './Task.schema';
import { NorificationsModule } from 'src/norifications/norifications.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    NorificationsModule,
  ],
  providers: [TasksService, TasksGateway],
  controllers: [TasksController],
  exports: [TasksService],
})
export class TasksModule {}
