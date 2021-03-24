import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors();
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
