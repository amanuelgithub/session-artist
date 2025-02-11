import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { DataSource } from 'typeorm';
import { UserEntity } from '@apps/api/database/entities';

@Injectable()
export class UsersService {
  constructor(private readonly ds: DataSource) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.ds.getRepository(UserEntity).create(createUserDto);

      await this.ds.getRepository(UserEntity).save(user);

      return user;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string) {
    const user = await this.ds.getRepository(UserEntity).findOne({
      where: { email },
    });

    // if (!user) {
    //   throw new NotFoundException(`User with email ${email} not found`);
    // }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
