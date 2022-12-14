import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './config/environment';
import { PokemonModule } from './pokemon/pokemon.module';
import { CoachModule } from './person/coach/coach.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: environment.db.database,
      host: environment.db.host,
      port: environment.db.port,
      username: environment.db.username,
      password: environment.db.password,
      synchronize: environment.db.synchronize,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    CoachModule,
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
