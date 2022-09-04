import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PersonEntity } from '../../person/entities/person.entity';
import { CompanyEntity } from "../../company/entities/company.entity";

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

  @ManyToOne(() => PersonEntity, (person: PersonEntity) => person.endereco)
  person: PersonEntity;

  @ManyToOne(() => CompanyEntity, (company: CompanyEntity) => company.adress)
  company: CompanyEntity;
}
