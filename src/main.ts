import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { AdminServer } from './server';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  console.log('test');

  const adminServer = new AdminServer(app);
  await adminServer.init();
  await adminServer.run();
}
bootstrap();
