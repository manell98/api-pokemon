import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { HabilidadesDTO } from '../dto/habilidades.dto';

@Entity('pokemons')
export class PokemonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column('text', { nullable: false, array: true })
  habilidades: Array<HabilidadesDTO>;

  @Column({ name: 'nivel_experiencia' })
  nivelExperiencia: number;
}
