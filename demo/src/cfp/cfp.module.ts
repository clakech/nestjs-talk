import { CFPResolver } from './cfp.resolver';
import { CFPController } from './cfp.controller';
import { CFPService } from './cfp.service';
import { Module, Logger } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [CFPController],
  providers: [CFPService, CFPResolver],
})
export class CFPModule {}
