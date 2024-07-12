import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDto } from '@libs/dao/common/user/dto/user.dto';
import { User } from '@libs/dao/common/user/user.entity';

@Controller('users')
@ApiTags('users')
@Crud({
  model: { type: User },
  dto: {
    create: UserDto,
    update: UserDto,
    replace: UserDto,
  },
  serialize: {
    create: UserDto,
    update: UserDto,
    replace: UserDto,
  },
})
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
