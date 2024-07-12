import { Module } from '@nestjs/common';
import { UsersDbRepository } from './repositories/users-db.repository';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';
import { UsersRepository } from './interfaces/users-repository.interface';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import adminDatabaseConfig from '@libs/dao/config/admin/admin-database.config';

@Module({
  imports: [
    TypeOrmExModule.forFeatures(
      [UsersDbRepository],
      [adminDatabaseConfig().name],
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
    @InjectDataSource(adminDatabaseConfig().name)
    private readonly dataSource: DataSource,
  ) {}

  async onModuleDestroy(): Promise<void> {
    await this.dataSource.destroy();
  }
}
