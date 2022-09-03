import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IHabilidades } from './interfaces/habilidades.interface';

@Entity('pokemons')
export class PokemonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column('text', { nullable: false, array: true })
  habilidades: Array<IHabilidades>;

  @Column({ name: 'nivel_experiencia' })
  nivelExperiencia: number;
}
