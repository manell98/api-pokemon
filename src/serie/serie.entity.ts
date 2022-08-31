import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'series' })
export class SerieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  status: string;

  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
