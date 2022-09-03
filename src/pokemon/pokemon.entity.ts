import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IHabilidadesInterface } from './interfaces/habilidades.interface';

@Entity('pokemons')
export class PokemonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column('text', { nullable: false, array: true })
  habilidades: Array<IHabilidadesInterface>;

  @Column({ name: 'nivel_experiencia' })
  nivelExperiencia: number;
}
