import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from '@libs/dao/common/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity], commonDatabseConfig().name)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
