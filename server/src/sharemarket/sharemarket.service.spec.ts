import { Test, TestingModule } from '@nestjs/testing';
import { SharemarketService } from './sharemarket.service';

describe('SharemarketService', () => {
  let service: SharemarketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharemarketService],
    }).compile();

    service = module.get<SharemarketService>(SharemarketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
