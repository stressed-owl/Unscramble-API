import { Controller, Get } from '@nestjs/common';
import { UnscrambleService } from './unscramble.service';

@Controller('words')
export class UnscrambleController {
  constructor(private service: UnscrambleService) {}

  @Get()
  async findWords() {
    return await this.service.findWords();
  }
}
