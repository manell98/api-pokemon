import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  telefone: string;

  @Column({ nullable: false })
  idade: number;

  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
