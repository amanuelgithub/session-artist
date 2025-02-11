import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from './config/configurations';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from './redis/redis.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './auth/guards';
import { TokenService } from './auth/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configurations],
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        console.log('configService.get("jwt")', configService.get('jwt'));

        return { ...configService.get('jwt') };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'P@ss1234',
      database: 'sessionartist',
      entities: [UserEntity],
      synchronize: true,
    }),
    RedisModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TokenService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
  ],
})
export class AppModule {}
