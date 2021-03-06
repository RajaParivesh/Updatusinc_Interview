import { NestFactory } from '@nestjs/core';
import { option } from '../config/swagger.config';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
