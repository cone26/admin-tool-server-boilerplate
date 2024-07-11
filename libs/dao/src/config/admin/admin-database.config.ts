import { registerAs } from '@nestjs/config';
import baseDatabaseConfig from '@libs/dao/config/base-database.config';
import { DataSourceOptions } from 'typeorm';

export default registerAs(
  'admin-database',
  (): DataSourceOptions => ({
    ...baseDatabaseConfig(),
    host: process.env.ADMIN_DB_HOST,
    port: Number(process.env.ADMIN_DB_PORT),
    username: process.env.ADMIN_DB_ID,
    password: process.env.ADMIN_DB_PW,
    name: process.env.ADMIN_DB_NAME,
    database: process.env.ADMIN_DB_DATABASE,
    entities: [`dist/libs/dao/src/admin/**/*.entity.!(js.map){,+(ts,js)}`],
    synchronize:
      process.env.ADMIN_DB_SYNCHRONIZE &&
      JSON.parse(process.env.ADMIN_DB_SYNCHRONIZE),
  }),
);
