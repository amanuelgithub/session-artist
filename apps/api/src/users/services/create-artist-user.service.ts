import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserBuilder } from '../interfaces';
import { DataSource } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { RegisterCustomerUserDto } from '../user-factory';
// import { PatientEntity, UserEntity } from 'src/database/entities';
import { CommonUserService } from './common-user.service';
import { UserEntity } from '@apps/api/database/entities';
// import { PatientsService } from 'src/modules/patient/patients/services';

@Injectable()
export class CreateArtistUserService {
  constructor(
    private readonly ds: DataSource,
    private commonUserService: CommonUserService,
    // private patientUserService: PatientsService,
  ) {}

  public async createUser(
    builder: IUserBuilder,
  ): Promise<UserEntity | undefined> {
    const qryRunner = this.ds.createQueryRunner();
    try {
      await qryRunner.connect();
      await qryRunner.startTransaction();
      const _user = await builder.getUser(qryRunner.manager);
      if (_user.id) {
        qryRunner.commitTransaction();
        return _user;
      }
      if (
        await this.commonUserService.isEmailTaken(
          qryRunner.manager,
          _user.email,
        )
      ) {
        throw new HttpException('Email is already taken', HttpStatus.CONFLICT);
      }
      if (
        await this.commonUserService.isUsernameTaken(
          qryRunner.manager,
          _user.username,
        )
      ) {
        throw new HttpException(
          'Username is already taken',
          HttpStatus.CONFLICT,
        );
      }
      if (
        await this.commonUserService.isPhoneNumberTaken(
          qryRunner.manager,
          _user.phone,
        )
      ) {
        throw new HttpException(
          'Phone number is already taken',
          HttpStatus.CONFLICT,
        );
      }

      //   const patient = new PatientEntity();
      //   _user.patient = patient;
      //   _user.patientId = patient.id;

      const user = await qryRunner.manager.save(UserEntity, _user);

      // const patient = await qryRunner.manager.save(PatientEntity, {})

      // const createPatientDto = plainToInstance(RegisterPatientUserDto, { userId: user.id });
      // await this.patientUserService.create(createPatientDto);

      await qryRunner.commitTransaction();
      return user;
    } catch (error) {
      await qryRunner.rollbackTransaction();
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error?.message || error?.code,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
      await qryRunner.release();
    }
  }
}
