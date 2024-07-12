import { EntityRepository } from '@libs/common/database/typeorm/typeorm-ex.decorator';
import { AbstractRepository } from '@libs/common/database/abstract.respository';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends AbstractRepository<User> {}
