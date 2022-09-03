import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'chuck-norris' })
export class ChuckNorrisEntity {
  @ApiProperty({
    description: 'Campo responsável por armazenar o id do chuck norris',
    example: '03ea0ecb-0679-4fc5-b669-79df6e748e4c',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description:
      'Campo responsável por armazenar as categorias do chuck norris',
    example: 'Aluno do Bruce lee',
    isArray: true,
  })
  @Column('text', { nullable: false, array: true })
  categorias: Array<string>;

  @ApiProperty({
    description:
      'Campo responsável por armazenar a url do icone do chuck norris',
    example: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  })
  @Column({ nullable: false, name: 'icone_url' })
  iconeUrl: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o id na API do chuck norris',
    example: '4_8teslmQ4KdPujX_oZjAg',
  })
  @Column({ nullable: false, name: 'id_chuck_norris' })
  idApiChuckNorris: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar a url da API do chuck norris',
    example: 'https://api.chucknorris.io/jokes/4_8teslmQ4KdPujX_oZjAg',
  })
  @Column({ nullable: false })
  url: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o valor do chuck norris',
    example: 'https://api.chucknorris.io/jokes/4_8teslmQ4KdPujX_oZjAg',
  })
  @Column({ nullable: false })
  valor: string;

  @ApiProperty({
    description:
      'Campo responsável por armazenar o TS de criação do chuck norris',
    example: '2022-09-03T17:47:06.186Z',
  })
  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @ApiProperty({
    description:
      'Campo responsável por armazenar o TS de edição do chuck norris',
    example: '2022-09-03T17:47:06.186Z',
  })
  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
