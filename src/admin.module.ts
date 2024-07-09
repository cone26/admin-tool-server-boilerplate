import { AdminServerConfig } from './config/admin.server.config';
import { Module } from '@nestjs/common';
import { AdminController } from './default/admin.controller';
import { AdminService } from './default/admin.service';

@Module({
  imports: [AdminServerConfig],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
