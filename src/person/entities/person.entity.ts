import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressEntity } from '../../address/entities/address.entity';

@Entity('persons')
export class PersonEntity {
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

  @OneToMany(() => AddressEntity, (address: AddressEntity) => address.person)
  endereco: Array<AddressEntity>;
}
