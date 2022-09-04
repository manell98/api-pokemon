import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CoachEntity } from '../../person/coach/entities/coach.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('address')
export class AddressEntity {
  @ApiProperty({
    description: 'Campo responsável por armazenar o id de criação do registro',
    example: '591eea8d-345b-401a-8f8c-98012b91a362',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o cep',
    example: '12345678',
  })
  @Column({ nullable: false })
  cep: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o logradouro',
    example: 'Rua Vera Cruz 40',
  })
  @Column({ nullable: false })
  logradouro: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o complemento',
    example: 'Perto exatamento de logo ali',
  })
  @Column({ nullable: false })
  complemento: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar o bairro',
    example: 'Rua muito doida',
  })
  @Column({ nullable: false })
  bairro: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar a cidade',
    example: 'São Paulo',
  })
  @Column({ nullable: false })
  cidade: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar a unidade federativa',
    example: 'DF',
  })
  @Column({ nullable: false })
  uf: string;

  @ApiProperty({
    description: 'Campo responsável por armazenar os dados do Treinador',
    type: CoachEntity,
  })
  @ManyToOne(
    () => CoachEntity,
    (coachEntity: CoachEntity) => coachEntity.endereco,
  )
  coach: CoachEntity;

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
