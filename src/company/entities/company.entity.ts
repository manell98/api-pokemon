import { AddressEntity } from '../../address/entities/address.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => AddressEntity, (adress: AddressEntity) => adress.company)
  adress: Array<AddressEntity>;
}
