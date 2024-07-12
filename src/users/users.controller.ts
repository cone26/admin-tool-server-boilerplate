import { Crud, CrudController } from '@dataui/crud';
import { UserEntity } from '@libs/dao/common/user/entities/user.entity';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
@Crud({
  model: { type: UserEntity },
  dto: {
    create: UserEntity,
    update: UserEntity,
    replace: UserEntity,
  },
  serialize: {
    create: UserEntity,
    update: UserEntity,
    replace: UserEntity,
  },
})
export class UsersController implements CrudController<UserEntity> {
  constructor(public service: UsersService) {}
}
