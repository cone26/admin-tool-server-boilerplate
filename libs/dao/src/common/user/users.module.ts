import { Module } from '@nestjs/common';
import { UsersDbRepository } from './repositories/users-db.repository';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';
import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { UsersRepository } from './interfaces/users-repository.interface';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmExModule.forFeatures(
      [UsersDbRepository],
      [commonDatabseConfig().name],
    ),
  ],
  providers: [
    {
      provide: UsersRepository,
      inject: [UsersDbRepository],
      useFactory: (repo: UsersDbRepository): UsersRepository => repo,
    },
  ],
  exports: [UsersRepository],
})
export class UsersModule {
  constructor(
    @InjectDataSource(commonDatabseConfig().name)
    private readonly dataSource: DataSource,
  ) {}

  async onModuleDestroy(): Promise<void> {
    await this.dataSource.destroy();
  }
}
