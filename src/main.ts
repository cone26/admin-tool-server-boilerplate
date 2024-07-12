import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AdminServer } from './admin.server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminServer = new AdminServer(app);
  await adminServer.init();
  await adminServer.run();
}
bootstrap();
