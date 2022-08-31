import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './config/environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: environment.db.database,
      host: environment.db.host,
      port: environment.db.port,
      username: environment.db.username,
      password: environment.db.password,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
