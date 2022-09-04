import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { HabilidadesDTO } from '../dto/habilidades.dto';
import { ApiProperty } from "@nestjs/swagger";

@Entity('pokemons')
export class PokemonEntity {
  @ApiProperty({
    description: 'Campo responsável por armazenar o id gerado pela Base de dados',
    example: '03ea0ecb-0679-4fc5-b669-79df6e748e4c',
  })
  @PrimaryGeneratedColumn( 'uuid')
  id: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o nome do pokemon',
    example: 'pikachu',
  })
  @Column({ nullable: false })
  nome: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o nível de experiência do pokemon',
    type: HabilidadesDTO,
    isArray: true
  })
  @Column('text', { nullable: false, array: true })
  habilidades: Array<HabilidadesDTO>;

  @ApiProperty({
    description: 'Campo responsável por armazenar o nível de experiência do pokemon',
    example: '123',
  })
  @Column({ name: 'nivel_experiencia' })
  nivelExperiencia: number;
}