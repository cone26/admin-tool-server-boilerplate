import { EntityRepository } from '@libs/common/database/typeorm/typeorm-ex.decorator';
import { AbstractRepository } from '@libs/common/database/abstract.respository';
import { UserEntity } from '@libs/dao/admin/user/entities/user.entity';
import { UsersRepository } from '@libs/dao/admin/user/interfaces/users-repository.interface';

@EntityRepository(UserEntity)
export class UsersDbRepository
  extends AbstractRepository<UserEntity>
  implements UsersRepository {}
