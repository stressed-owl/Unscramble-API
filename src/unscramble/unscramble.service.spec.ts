import { Test, TestingModule } from '@nestjs/testing';
import { UnscrambleService } from './unscramble.service';

describe('UnscrambleService', () => {
  let service: UnscrambleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnscrambleService],
    }).compile();

    service = module.get<UnscrambleService>(UnscrambleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
