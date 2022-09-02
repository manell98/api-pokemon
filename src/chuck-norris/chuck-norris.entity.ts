import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'chuck-norris' })
export class ChuckNorrisEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false, array: true })
  categorias: Array<string>;

  @Column({ nullable: false, name: 'icone_url' })
  iconeUrl: string;

  @Column({ nullable: false, name: 'id_chuck_norris' })
  idApiChuckNorris: string;

  @Column({ nullable: false })
  url: string;

  @Column({ nullable: false })
  valor: string;

  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
