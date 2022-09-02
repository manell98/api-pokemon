import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/environment';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const app = await NestFactory.create(AppModule, {
    logger: [environment.app.logLevel],
  });
  await app.listen(environment.app.port);
}

bootstrap();
