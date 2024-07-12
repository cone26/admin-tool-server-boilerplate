import { AdminServerConfig } from './config/admin.server.config';
import { Module } from '@nestjs/common';
import { AdminController } from './default/admin.controller';
import { AdminService } from './default/admin.service';
import adminDatabaseConfig from '@libs/dao/config/admin/admin-database.config';
import { DataSourceOptions } from 'typeorm';
import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [
    AdminServerConfig,

    ...[commonDatabseConfig, adminDatabaseConfig].map((it) => {
      return TypeOrmModule.forRootAsync({
        name: it().name,
        inject: [it.KEY],
        useFactory: async (config: DataSourceOptions) => config,
      });
    }),

    // feature
    UsersModule,
    PostsModule,
  ],
  controllers: [AdminController, UsersController, PostsController],
  providers: [AdminService, UsersService, PostsService],
})
export class AppModule {}
