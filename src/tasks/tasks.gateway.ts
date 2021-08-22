import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class TasksGateway implements OnGatewayConnection,OnGatewayInit{

  private logger: Logger = new Logger(TasksGateway.name);

  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
   this.logger.log('intaited');            
  }
  handleConnection(client: any, ...args: any[]) {
   this.logger.log('connected '+client.id);            
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
