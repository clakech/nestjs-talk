import { Module } from '@nestjs/common';
import { CFPController } from './cfp.controller';
import { CFPService } from './cfp.service';

@Module({
  imports: [],
  controllers: [CFPController],
  providers: [CFPService],
  exports: [],
})
export class CFPModule {}