import { CallForPaper } from './entities/call-for-paper.entity';
import { CFPService } from './cfp.service';
import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/common';

@Resolver('Query')
export class CFPResolver {
  constructor(private readonly cfpService: CFPService) {}

  @Query()
  callForPapers(obj, args, context, info): CallForPaper[] {
    return this.cfpService.findAll();
  }
}
