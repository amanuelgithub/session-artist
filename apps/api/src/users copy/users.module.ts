import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { GetUserService } from './services';

@Module({
  controllers: [UsersController],
  providers: [UsersService, GetUserService],
  exports: [UsersService, GetUserService],
})
export class UsersModule {}
