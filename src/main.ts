import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({ origin: false });

  await app
    .listen(3333)
    .then(() => console.log('successfully started on port 3333'))
    .catch((e) => console.log('something went wrong!!!!!', e));
}
bootstrap();
