import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './entities/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
