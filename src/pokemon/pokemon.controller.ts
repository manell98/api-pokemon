import { Controller, Get, Headers, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonEntity } from './entities/pokemon.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorDTO } from './dto/error.dto';

@Controller('pokemon')
@ApiTags('Pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @ApiOperation({
    summary:
      'Busca, lista e salva os pokemons na base de dados, deacordo com o número da página e limite de dados',
  })
  @ApiResponse({
    status: 201,
    description: 'pokemons listados e salvados com sucesso!!',
    type: PokemonEntity,
    isArray: true,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro ao buscar e salvar o pokemon na Base de Dados',
    type: ErrorDTO,
  })
  @Get('/find-list-and-save')
  async findAndSaveListPokemon(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Array<PokemonEntity>> {
    return this.pokemonService.findAndSaveListPokemon(page, limit);
  }

  @ApiOperation({
    summary: 'Busca e salva um pokemon na base de dados',
  })
  @ApiResponse({
    status: 201,
    description: 'pokemon e salvados com sucesso!!',
    type: PokemonEntity,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro ao buscar e salvar o pokemon na Base de Dados',
    type: ErrorDTO,
  })
  @Get('/find-one-and-save')
  async findOneAndSavePokemon(
    @Headers('pokemon') pokemon: string,
  ): Promise<PokemonEntity> {
    return this.pokemonService.findOneAndSavePokemon(pokemon);
  }
}
