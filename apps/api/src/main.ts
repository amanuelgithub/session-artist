import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors();

  app.enableCors({
    preflightContinue: false,
    optionsSuccessStatus: 204,
    methods: 'GET,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,

    origin: function (origin, callback) {
      const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173']; // replace with your allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        // if ([].indexOf(origin) !== -1) {
        Logger.log(`CORS enabled for ${origin}`);
        callback(null, true);
      } else {
        Logger.error(`CORS blocked for ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
  });

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
