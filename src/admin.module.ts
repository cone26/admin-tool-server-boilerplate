import { AdminServerConfig } from './admin.server.config';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [AdminServerConfig],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
