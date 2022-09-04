import { Controller, Get, Headers, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonEntity } from './pokemon.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('pokemon')
@ApiTags('Pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('/find-list-and-save')
  async findAndSaveListPokemon(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Array<PokemonEntity>> {
    return this.pokemonService.findAndSaveListPokemon(page, limit);
  }

  @Get('/find-one-and-save')
  async findOneAndSavePokemon(
    @Headers('pokemon') pokemon: string,
  ): Promise<PokemonEntity> {
    return this.pokemonService.findOneAndSavePokemon(pokemon);
  }
}
