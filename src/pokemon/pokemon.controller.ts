import { Controller, Get, Headers } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async findOneAndSavePokemon(
    @Headers('pokemon') pokemon: string,
  ): Promise<any> {
    return this.pokemonService.findOneAndSavePokemon(pokemon);
  }
}
