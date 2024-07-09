import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './default/admin.controller';
import { AdminService } from './default/admin.service';

describe('AppController', () => {
  let adminController: AdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AdminService],
    }).compile();

    adminController = app.get<AdminController>(AdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(adminController.getHello()).toBe('Hello World!');
    });
  });
});
