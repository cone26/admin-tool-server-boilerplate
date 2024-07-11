import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../interfaces/user.interface';

@Entity('user')
export class UserEntity implements User {
  @PrimaryGeneratedColumn({ comment: 'user id', unsigned: true })
  id: number;

  @Column({ comment: 'user name' })
  name: string;

  @Column({ comment: 'password' })
  password: string;
}
