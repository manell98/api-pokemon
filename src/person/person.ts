import { Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
