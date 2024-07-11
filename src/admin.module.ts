import { AdminServerConfig } from './config/admin.server.config';
import { Module } from '@nestjs/common';
import { AdminController } from './default/admin.controller';
import { AdminService } from './default/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import adminDatabaseConfig from '@libs/dao/config/admin/admin-database.config';
import { DataSourceOptions } from 'typeorm';
import { UsersModule } from '@libs/dao/common/user/users.module';
import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';

@Module({
  imports: [
    AdminServerConfig,

    ...[commonDatabseConfig, adminDatabaseConfig].map((it) => {
      return TypeOrmExModule.forRootAsync({
        name: it().name,
        inject: [it.KEY],
        useFactory: async (config: DataSourceOptions) => config,
      });
    }),
    UsersModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
