import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn({ comment: 'post id', unsigned: true })
  id: number;

  @Column({ comment: 'post title' })
  title: string;

  @Column({ comment: 'post content' })
  body: string;
}
