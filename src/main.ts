import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/environment';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const app = await NestFactory.create(AppModule, {
    logger: [environment.app.logLevel],
  });

  app.setGlobalPrefix('/api/v1');

  const config = new DocumentBuilder()
    .setTitle(environment.app.name)
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(environment.app.port);
}

bootstrap();
