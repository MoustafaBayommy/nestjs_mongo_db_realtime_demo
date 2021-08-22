import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayInit} from "@nestjs/websockets";
import { Server } from 'socket.io';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { forwardRef, Inject, Logger } from "@nestjs/common";
import { NotificationDto } from "./notification.dto";
import { NotificationsService } from "./notifications.service";

@WebSocketGateway({namespace:"notifications"})
export class NotificationsGatway implements OnGatewayConnection,OnGatewayInit{
  constructor(    @Inject(forwardRef(() => NotificationsService)) private readonly service:NotificationsService){
  }
   private logger: Logger = new Logger(NotificationsGatway.name);

      afterInit(server: any) {
       this.logger.log('intaited');            
      }
      handleConnection(client: any, ...args: any[]) {
       this.logger.log('connected '+client.id);            
      }

      @WebSocketServer()
      server: Server;
      
      @SubscribeMessage('new')
     async  handleMessage(client: any, dto: NotificationDto ): Promise<string> {
             await this.service.save(dto);
             this.server.emit('new',dto);

       this.logger.log('got new notification');            

       this.logger.log(JSON.stringify(client.id));            
        return 'Hello world!';
      }

      
  @SubscribeMessage('events')
  findAll(@MessageBody() data: any) {
        console.log('hh');
        
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }
      
}
