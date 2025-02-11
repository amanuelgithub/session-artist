import { EntityManager } from 'typeorm';
import { IUserBuilder } from '../interfaces';
import { RegisterCustomerUserDto } from './dtos';
import { UserBuilder } from './base';
import { UserEntity } from '@apps/api/database/entities';
import { USER_ROLE } from '@apps/api/common';

export class CustomerBuilder implements IUserBuilder {
  private dto: RegisterCustomerUserDto;
  private builder: UserBuilder;

  constructor(dto: RegisterCustomerUserDto) {
    this.dto = dto;
    this.builder = new UserBuilder();
  }

  async getUser(m?: EntityManager): Promise<UserEntity> {
    const { username, phoneNumber, email } = this.dto;
    this.builder = this.builder
      .setRole(USER_ROLE.CUSTOMER)
      .setUsername(username)
      .setPhoneNumber(phoneNumber)
      .setEmail(email);
    // adding password for the different platforms
    this.builder = await this.builder.addUserAccess();
    return this.builder.build();
  }

  getNotificationDetail(userId: number) {
    return this.builder.getNotificationDetails(userId);
  }
}
