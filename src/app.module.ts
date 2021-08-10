import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NorificationsModule } from './norifications/norifications.module';
import { NotificationsController } from './norifications/notifications.controller';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/notifications?replicaSet=rs0',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }), NorificationsModule],
    controllers: [AppController, NotificationsController],
  providers: [AppService],
})
export class AppModule {}
