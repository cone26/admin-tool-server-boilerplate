import adminDatabaseConfig from '@libs/dao/config/admin/admin-database.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const environment = process.env.NODE_ENV || 'test';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/.${environment}.env`,
      isGlobal: true,
      load: [adminDatabaseConfig],
    }),
  ],
})
export class AdminServerConfig {}
