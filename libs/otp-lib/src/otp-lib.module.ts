import { Module } from '@nestjs/common';
import { OtpLibService } from './otp-lib.service';

@Module({
  providers: [OtpLibService],
  exports: [OtpLibService],
})
export class OtpLibModule {}
