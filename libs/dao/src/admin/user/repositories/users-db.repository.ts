import { EntityRepository } from '@libs/common/database/typeorm/typeorm-ex.decorator';
import { UserEntity } from '../entities/user.entity';
import { AbstractRepository } from '@libs/common/database/abstract.respository';
import { UsersRepository } from '../interfaces/users-repository.interface';

@EntityRepository(UserEntity)
export class UsersDbRepository
  extends AbstractRepository<UserEntity>
  implements UsersRepository {}
