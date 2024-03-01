import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnscrambleController } from './unscramble.controller';
import { UnscrambleService } from './unscramble.service';
import { Word } from 'src/entitiy/word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Word])],
  providers: [UnscrambleService],
  controllers: [UnscrambleController],
})
export class UnscrambleModule {}
