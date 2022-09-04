import { Person } from '../../person';
import { Column, Entity, OneToMany } from 'typeorm';
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
}
