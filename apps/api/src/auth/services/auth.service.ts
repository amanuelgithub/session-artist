import { UsersService } from '@apps/api/users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateGoogleUser(googleUser: any) {
    const user = await this.userService.findByEmail(googleUser?.email);

    if (user) return user;

    return await this.userService.create(googleUser);
  }
}
