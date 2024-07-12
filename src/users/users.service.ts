import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { Repository } from 'typeorm';
import { User } from '@libs/dao/common/user/user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User, commonDatabseConfig().name)
    protected readonly repo: Repository<User>,
  ) {
    super(repo);
  }
}
