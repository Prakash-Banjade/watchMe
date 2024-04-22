import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3001

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000']
  });
  await app.listen(PORT).then(() => console.log(`Application is running on: ${PORT}`));
}
bootstrap();
