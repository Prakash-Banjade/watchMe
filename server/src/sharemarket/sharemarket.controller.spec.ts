import { Test, TestingModule } from '@nestjs/testing';
import { SharemarketController } from './sharemarket.controller';
import { SharemarketService } from './sharemarket.service';

describe('SharemarketController', () => {
  let controller: SharemarketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharemarketController],
      providers: [SharemarketService],
    }).compile();

    controller = module.get<SharemarketController>(SharemarketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
