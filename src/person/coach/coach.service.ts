import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoachEntity } from './entities/coach.entity';
import { PokemonEntity } from '../../pokemon/entities/pokemon.entity';
import { CreatePokemonDto } from '../../pokemon/dto/create-pokemon.dto';

@Injectable()
export class CoachService {
  constructor(
    @InjectRepository(CoachEntity)
    private readonly coachEntityRepository: Repository<CoachEntity>,

    @InjectRepository(PokemonEntity)
    private readonly pokemonEntityRepository: Repository<PokemonEntity>,
  ) {}

  async create(createCoachDto: CreateCoachDto) {
    const coach = await this.coachEntityRepository.save(
      this.coachEntityRepository.create(createCoachDto),
    );

    if (createCoachDto.pokemons && createCoachDto.pokemons.length > 0) {
      await Promise.all(
        createCoachDto.pokemons.map(
          async (createPokemonDto: CreatePokemonDto) => {
            const pokemonEntity = new PokemonEntity();

            pokemonEntity.nome = createPokemonDto.nome;
            pokemonEntity.habilidades = createPokemonDto.habilidades;
            pokemonEntity.nivelExperiencia = createPokemonDto.nivelExperiencia;
            pokemonEntity.coach = coach;

            await this.pokemonEntityRepository.save(
              this.pokemonEntityRepository.create(pokemonEntity),
            );
          },
        ),
      );
    }

    return coach;
  }
}
