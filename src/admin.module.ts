import { AdminServerConfig } from './config/admin.server.config';
import { Module } from '@nestjs/common';
import { AdminController } from './default/admin.controller';
import { AdminService } from './default/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import adminDatabaseConfig from '@libs/dao/config/admin/admin-database.config';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    AdminServerConfig,
    TypeOrmModule.forRootAsync({
      name: adminDatabaseConfig().name,
      inject: [adminDatabaseConfig.KEY],
      useFactory: (config: DataSourceOptions) => config,
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
