import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  app.setGlobalPrefix('api');
  await app.listen(port || 3001, () => {
    console.log('Started on port:' + port);
  });
}

bootstrap();
