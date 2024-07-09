import { registerAs } from '@nestjs/config';
import baseDatabaseConfig from '@libs/dao/config/base-database.config';
import { DataSourceOptions } from 'typeorm';

export default registerAs(
  'admin-databse',
  (): DataSourceOptions => ({
    ...baseDatabaseConfig(),
    host: process.env.COMMON_DB_HOST,
    port: Number(process.env.COMMON_DB_PORT),
    username: process.env.COMMON_DB_ID,
    password: process.env.COMMON_DB_PW,
    name: process.env.COMMON_DB_NAME,
    database: process.env.COMMON_DB_DATABASE,
    entities: [`dist/libs/dao/src/admin/**/*.entity.!(js.map){,+(ts,js)}`],
    synchronize:
      process.env.COMMON_DB_SYNCHRONIZE &&
      JSON.parse(process.env.COMMON_DB_SYNCHRONIZE),
  }),
);
