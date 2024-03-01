import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Word } from 'src/entitiy/word.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnscrambleService {
  constructor(
    @InjectRepository(Word)
    private contactRepository: Repository<Word>,
  ) {}

  async findWords(): Promise<Word[]> {
    return this.contactRepository.find();
  }
}
