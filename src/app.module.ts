import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './config/environment';
import { SerieModule } from './serie/serie.module';
import { ChuckNorrisModule } from './chuck-norris/chuck-norris.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { PersonModule } from './person/person.module';
import { AddressModule } from './address/address.module';

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
    SerieModule,
    ChuckNorrisModule,
    PokemonModule,
    PersonModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
