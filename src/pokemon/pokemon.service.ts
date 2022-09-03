import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonEntity } from './pokemon.entity';
import { IOutputPokemonAPI } from './interfaces/outputPokemonAPI.interface';
import {
  IPaginacaoObjetoPokemonAPI,
  IPaginacaoPokemonAPI,
} from './interfaces/paginacaoPokemonAPI.interface';

@Injectable()
export class PokemonService {
  logger: Logger = new Logger(PokemonService.name);

  constructor(
    @InjectRepository(PokemonEntity)
    private readonly pokemonRepository: Repository<PokemonEntity>,
  ) {}

  async findAndSaveListPokemon(
    page: number,
    limit: number,
  ): Promise<Array<PokemonEntity>> {
    page = page ?? 1;
    limit = limit ?? 20;

    this.logger.debug(
      `Buscando ${limit} pokemon(s) e salvando suas informações no banco de dados...`,
    );

    const endpoint = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`;

    const result = await axios.get(endpoint);

    const listaPokemons: Array<string> = [];

    const outputPaginacaoPokemonAPI: IPaginacaoPokemonAPI = result.data;

    outputPaginacaoPokemonAPI.results.forEach(
      (objetoPokemonAPI: IPaginacaoObjetoPokemonAPI) => {
        listaPokemons.push(objetoPokemonAPI.name);
      },
    );

    return Promise.all(
      listaPokemons.map(async (pokemon: string) => {
        return Promise.resolve(this.findOneAndSavePokemon(pokemon));
      }),
    );
  }

  async findOneAndSavePokemon(pokemon: string): Promise<PokemonEntity> {
    this.logger.debug(
      `Buscando as informações do pokemon ${pokemon} e salvando no banco de dados...`,
    );

    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const result = await axios.get(endpoint);

    const outputPokemon: IOutputPokemonAPI = result.data;

    return this.pokemonRepository.save(
      this.pokemonRepository.create({
        nome: pokemon,
        habilidades: outputPokemon.abilities,
        nivelExperiencia: outputPokemon.base_experience,
      }),
    );
  }
}
