import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'chuck-norris' })
export class ChuckNorrisEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
