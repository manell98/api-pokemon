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

@Entity({ name: 'coaches' })
export class CoachEntity extends Person {
  @OneToMany(() => AddressEntity, (address: AddressEntity) => address.coach)
  endereco: Array<AddressEntity>;

  @Column({ name: 'nivel_experiencia', nullable: false })
  nivelExperiencia: number;

  @OneToMany(
    () => PokemonEntity,
    (pokemonEntity: PokemonEntity) => pokemonEntity.coach,
  )
  pokemons: Array<PokemonEntity>;

  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
