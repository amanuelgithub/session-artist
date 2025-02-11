import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { IORedisKey } from './redis.constants';

@Injectable()
export class RedisService {
  constructor(@Inject(IORedisKey) private readonly redisClient: Redis) {}

  async getKeys(pattern: string = '*'): Promise<string[]> {
    return await this.redisClient.keys(pattern);
  }

  async store(
    key: string,
    value: string | number,
    expiresIn?: number,
  ): Promise<boolean> {
    const result = expiresIn
      ? await this.redisClient.set(key, value, 'PX', expiresIn)
      : await this.redisClient.set(key, value);

    return result === 'OK';
  }

  async get(key: string): Promise<string | null> {
    return this.redisClient.get(key);
  }

  async delete(key: string): Promise<boolean> {
    const result = await this.redisClient.del(key);
    return result === 1;
  }

  async validate(key: string, value: string): Promise<boolean> {
    const storedValue = await this.redisClient.get(key);
    return storedValue === value;
  }
}
