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
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column('text', { nullable: false, array: true })
  categorias: Array<string>;

  @ApiProperty()
  @Column({ nullable: false, name: 'icone_url' })
  iconeUrl: string;

  @ApiProperty()
  @Column({ nullable: false, name: 'id_chuck_norris' })
  idApiChuckNorris: string;

  @ApiProperty()
  @Column({ nullable: false })
  url: string;

  @ApiProperty()
  @Column({ nullable: false })
  valor: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
