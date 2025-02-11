import { EntityManager } from 'typeorm';
import { IUserBuilder } from '../interfaces';
import { RegisterAdminUserDto } from './dtos';
import { UserBuilder } from './base';
import { UserEntity } from '@apps/api/database/entities';
import { USER_ROLE } from '@apps/api/common';
// import { UserEntity } from 'src/database/entities';
// import { USER_ROLE } from 'src/common';

export class AdminBuilder implements IUserBuilder {
  private dto: RegisterAdminUserDto;
  private builder: UserBuilder;

  constructor(dto: RegisterAdminUserDto) {
    this.dto = dto;
    this.builder = new UserBuilder();
  }

  async getUser(m?: EntityManager): Promise<UserEntity> {
    const { username, phoneNumber, email } = this.dto;
    return this.builder
      .setRole(USER_ROLE.ADMIN)
      .setUsername(username)
      .setPhoneNumber(phoneNumber)
      .setEmail(email)
      .build();
  }
  getNotificationDetail(userId: number) {
    return this.builder.getNotificationDetails(userId);
  }
}
