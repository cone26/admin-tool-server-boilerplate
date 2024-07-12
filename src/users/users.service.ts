import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@libs/dao/common/user/entities/user.entity';
import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity, commonDatabseConfig().name)
    protected readonly repo: Repository<UserEntity>,
  ) {
    super(repo);
  }
}
