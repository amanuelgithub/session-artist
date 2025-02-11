import { Global, Module, OnApplicationShutdown } from '@nestjs/common';
import { RedisService } from './redis.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IORedisKey } from './redis.constants';
import { Redis, RedisOptions } from 'ioredis';
import { ModuleRef } from '@nestjs/core';
// import { redisConfigToken } from 'src/config/cache/redis.config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: IORedisKey,
      useFactory: async (configService: ConfigService) => {
        const redisOptions = configService.get<RedisOptions>('redis');
        if (!redisOptions) {
          throw new Error('Redis configuration is not defined');
        }
        return new Redis(redisOptions);
      },
      inject: [ConfigService],
    },

    RedisService,
  ],
  exports: [RedisService],
})
export class RedisModule implements OnApplicationShutdown {
  constructor(private readonly moduleRef: ModuleRef) {}

  onApplicationShutdown(signal?: string): Promise<void> {
    return new Promise<void>((resolve) => {
      const redis = this.moduleRef.get<Redis>(IORedisKey);
      redis.quit();
      redis.on('end', () => {
        resolve();
      });
      // redis.disconnect();
      // resolve();
    });
  }
}
