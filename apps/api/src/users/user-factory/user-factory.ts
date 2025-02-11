import { USER_ROLE, UserRole } from '@apps/api/common';
import { IUserBuilder } from '../interfaces';
import {
  RegisterAdminUserDto,
  RegisterArtistUserDto,
  RegisterCustomerUserDto,
} from './dtos';
import { CustomerBuilder } from './customer.builder';
import { ArtistBuilder } from './artist.builder';
import { AdminBuilder } from './admin.builder';

export class UserFactory {
  public static get<T extends { role: UserRole }>(dto: T): IUserBuilder {
    const { role, ..._dto } = dto;

    switch (role) {
      case USER_ROLE.CUSTOMER:
        return new CustomerBuilder(_dto as unknown as RegisterCustomerUserDto);
      case USER_ROLE.ARTIST:
        return new ArtistBuilder(_dto as unknown as RegisterArtistUserDto);
      case USER_ROLE.ADMIN:
        return new AdminBuilder(_dto as unknown as RegisterAdminUserDto);
    }
  }
}
