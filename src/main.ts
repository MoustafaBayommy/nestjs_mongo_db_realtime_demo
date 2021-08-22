import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './norifications/redis-dapter';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.useStaticAssets(join(__dirname, '..', 'client'));

  await app.listen(3000);
}
bootstrap();
