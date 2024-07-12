import { AdminServerConfig } from './config/admin.server.config';
import { Module } from '@nestjs/common';
import { AdminController } from './default/admin.controller';
import { AdminService } from './default/admin.service';
import adminDatabaseConfig from '@libs/dao/config/admin/admin-database.config';
import { DataSourceOptions } from 'typeorm';
import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';
import { CommonModule } from '@libs/dao/common/common.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

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

    // dao
    CommonModule,
    UsersModule,
  ],
  controllers: [AdminController, UsersController],
  providers: [AdminService, UsersService],
})
export class AppModule {}
