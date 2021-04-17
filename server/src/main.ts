import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: ['POST', 'GET', 'PUT'],
  });
  await app.listen(8080);
}
bootstrap();
