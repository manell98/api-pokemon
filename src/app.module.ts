import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './config/environment';
import { SerieModule } from './serie/serie.module';
import { ChuckNorrisModule } from './chuck-norris/chuck-norris.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { PersonModule } from './person/person.module';
import { CompanyModule } from './company/company.module';

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
    CompanyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
