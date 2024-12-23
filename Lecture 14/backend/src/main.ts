import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
   // Enable CORS
   app.enableCors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow cookies if needed
  });
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();

