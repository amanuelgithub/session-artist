import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserBuilder } from '../interfaces';
import { DataSource } from 'typeorm';
import { CommonUserService } from './common-user.service';
import { UserEntity } from '@apps/api/database/entities';

@Injectable()
export class CreateUserService {
  constructor(
    private ds: DataSource,
    private commonUserService: CommonUserService,
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

      const user = await qryRunner.manager.save(UserEntity, _user);
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
