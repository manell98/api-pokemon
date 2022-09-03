import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonEntity } from './pokemon.entity';
import { IOutputPokemonAPI } from './interfaces/outputPokemonAPI';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(PokemonEntity)
    private readonly pokemonRepository: Repository<PokemonEntity>,
  ) {}

  async findOneAndSavePokemon(pokemon: string): Promise<any> {
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
