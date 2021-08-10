import { Test, TestingModule } from '@nestjs/testing';
import { NorificationsService } from './norifications.service';

describe('NorificationsService', () => {
  let service: NorificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NorificationsService],
    }).compile();

    service = module.get<NorificationsService>(NorificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
