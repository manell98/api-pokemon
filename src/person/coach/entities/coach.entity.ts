import { PersonEntity } from '../../entities/person.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PokemonEntity } from '../../../pokemon/entities/pokemon.entity';

@Entity({ name: 'coaches' })
export class CoachEntity extends PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nivel_experiencia', nullable: false })
  nivelExperiencia: string;

  @OneToMany(
    () => PokemonEntity,
    (pokemonEntity: PokemonEntity) => pokemonEntity.coach,
  )
  pokemons: Array<PokemonEntity>;
}
