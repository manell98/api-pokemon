import { Person } from '../../person';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { PokemonEntity } from '../../../pokemon/entities/pokemon.entity';
import { AddressEntity } from '../../../address/entities/address.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'coaches' })
export class CoachEntity extends Person {
  @ApiProperty({
    description: 'Campo responsável por armazenar o endereço',
    type: AddressEntity,
    isArray: true,
  })
  @OneToMany(() => AddressEntity, (address: AddressEntity) => address.coach)
  endereco: Array<AddressEntity>;

  @ApiProperty({
    description: 'Campo responsável por armazenar o nível de experiência.',
    example: 100,
  })
  @Column({ name: 'nivel_experiencia', nullable: false })
  nivelExperiencia: number;

  @ApiProperty({
    description: 'Campo responsável por armazenar os dados do pokemon',
    type: PokemonEntity,
    isArray: true,
  })
  @OneToMany(
    () => PokemonEntity,
    (pokemonEntity: PokemonEntity) => pokemonEntity.coach,
  )
  pokemons: Array<PokemonEntity>;

  @ApiProperty({
    description:
      'Campo responsável por armazenar o tempo de criação do registro',
    example: '2022-09-04 22:30:55.539000',
  })
  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @ApiProperty({
    description:
      'Campo responsável por armazenar o tempo de edição do registro',
    example: '2022-09-04 22:30:55.539000',
  })
  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
