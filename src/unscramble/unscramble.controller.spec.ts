import { Test, TestingModule } from '@nestjs/testing';
import { UnscrambleController } from './unscramble.controller';

describe('UnscrambleController', () => {
  let controller: UnscrambleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnscrambleController],
    }).compile();

    controller = module.get<UnscrambleController>(UnscrambleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
