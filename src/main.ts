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
    .setVersion(environment.app.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(environment.app.port);
}

bootstrap();
