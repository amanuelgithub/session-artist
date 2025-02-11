import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
// import { CreatePatientUserService } from './services/create-patient-user.service';
import { UsersController } from './controllers';
import { GetUserService, CommonUserService } from './services';
import { CreateUserService } from './services/create-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccessEntity, UserEntity } from '../database/entities';

@Module({
  imports: [
    // forwardRef(() => PatientsModule),
    TypeOrmModule.forFeature([UserEntity, UserAccessEntity]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    // CreatePatientUserService,
    CreateUserService,
    GetUserService,
    CommonUserService,
  ],
  exports: [
    UsersService,
    // CreatePatientUserService,
    CreateUserService,
    GetUserService,
    CommonUserService,
  ],
})
export class UsersModule {}
