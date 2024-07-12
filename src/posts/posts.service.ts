import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '@libs/dao/common/post/post.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class PostsService extends TypeOrmCrudService<Post> {
  constructor(
    @InjectRepository(Post, commonDatabseConfig().name)
    protected readonly repo: Repository<Post>,
  ) {
    super(repo);
  }
}
