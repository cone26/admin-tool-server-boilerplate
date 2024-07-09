import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default registerAs('base-database', () => ({
  type: 'mysql' as const,
  namingStrategy: new SnakeNamingStrategy(),
  charset: 'utf8mb4',
  timezone: 'Z',
  extra: {
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10,
    waitForConnections: true,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  },
  maxQueryExecutionTime: 1000,
  logging: [],
}));
