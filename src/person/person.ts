import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({
    description:
      'Campo responsável por armazenar o tempo de criação do registro',
    example: '2022-09-04 22:30:55.539000',
  })
  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @ApiProperty({
    description:
      'Campo responsável por armazenar o tempo de edição do registro',
    example: '2022-09-04 22:30:55.539000',
  })
  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
