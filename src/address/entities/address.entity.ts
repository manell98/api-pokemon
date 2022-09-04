import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CoachEntity } from '../../person/coach/entities/coach.entity';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  cep: string;

  @Column({ nullable: false })
  logradouro: string;

  @Column({ nullable: false })
  complemento: string;

  @Column({ nullable: false })
  bairro: string;

  @Column({ nullable: false })
  cidade: string;

  @Column({ nullable: false })
  uf: string;

  @ManyToOne(
    () => CoachEntity,
    (coachEntity: CoachEntity) => coachEntity.endereco,
  )
  coach: CoachEntity;

  @CreateDateColumn({ name: 'timestamp_criacao' })
  tsCriacao: Date;

  @UpdateDateColumn({ name: 'timestamp_edicao' })
  tsEdicao: Date;
}
