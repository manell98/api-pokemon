import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoachEntity } from './entities/coach.entity';
import { PokemonEntity } from '../../pokemon/entities/pokemon.entity';
import { CreatePokemonDto } from '../../pokemon/dto/create-pokemon.dto';
import { AddressEntity } from '../../address/entities/address.entity';
import { CreateAddressDto } from '../../address/dto/create-address.dto';

@Injectable()
export class CoachService {
  constructor(
    @InjectRepository(CoachEntity)
    private readonly coachEntityRepository: Repository<CoachEntity>,

    @InjectRepository(AddressEntity)
    private readonly addressEntityRepository: Repository<AddressEntity>,

    @InjectRepository(PokemonEntity)
    private readonly pokemonEntityRepository: Repository<PokemonEntity>,
  ) {}

  async create(createCoachDto: CreateCoachDto) {
    const coach = await this.coachEntityRepository.save(
      this.coachEntityRepository.create(createCoachDto),
    );

    await Promise.all(
      createCoachDto.endereco.map(
        async (createAddressDto: CreateAddressDto) => {
          const address: AddressEntity = new AddressEntity();

          address.cep = createAddressDto.cep;
          address.logradouro = createAddressDto.logradouro;
          address.complemento = createAddressDto.complemento;
          address.bairro = createAddressDto.bairro;
          address.cidade = createAddressDto.cidade;
          address.uf = createAddressDto.uf;
          address.coach = coach;

          await this.addressEntityRepository.save(
            this.addressEntityRepository.create(address),
          );
        },
      ),
    );

    // if (createCoachDto.pokemons && createCoachDto.pokemons.length > 0) {
    //   await Promise.all(
    //     createCoachDto.pokemons.map(
    //       async (createPokemonDto: CreatePokemonDto) => {
    //         const pokemonEntity = new PokemonEntity();
    //
    //         pokemonEntity.nome = createPokemonDto.nome;
    //         pokemonEntity.habilidades = createPokemonDto.habilidades;
    //         pokemonEntity.nivelExperiencia = createPokemonDto.nivelExperiencia;
    //         pokemonEntity.coach = coach;
    //
    //         await this.pokemonEntityRepository.save(
    //           this.pokemonEntityRepository.create(pokemonEntity),
    //         );
    //       },
    //     ),
    //   );
    // }

    return coach;
  }
}
