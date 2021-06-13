import { Module } from '@nestjs/common';
import { UserController } from './infraestructura/controllers/user/user.controller';
import { UserService } from './core/services/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
