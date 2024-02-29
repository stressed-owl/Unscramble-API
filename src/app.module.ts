import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConnectionConfig } from './config/typeorm.config';
import { UnscrambleController } from './unscramble/unscramble.controller';
import { UnscrambleService } from './unscramble/unscramble.service';
import { UnscrambleModule } from './unscramble/unscramble.module';

const envModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [
    envModule,
    TypeOrmModule.forRoot(typeOrmConnectionConfig),
    UnscrambleModule,
  ],
  controllers: [UnscrambleController],
  providers: [UnscrambleService],
})
export class AppModule {}
