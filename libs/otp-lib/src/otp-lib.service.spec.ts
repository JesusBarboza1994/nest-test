import { Test, TestingModule } from '@nestjs/testing';
import { OtpLibService } from './otp-lib.service';

describe('OtpLibService', () => {
  let service: OtpLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtpLibService],
    }).compile();

    service = module.get<OtpLibService>(OtpLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
