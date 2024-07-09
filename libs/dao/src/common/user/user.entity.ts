import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ comment: 'user id', unsigned: true })
  id: number;

  @Column({ comment: 'user name' })
  name: string;

  @Column({ comment: 'password' })
  password: string;
}
