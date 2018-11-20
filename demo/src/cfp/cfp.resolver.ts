import { CallForPaper } from './entities/call-for-paper.entity';
import { CFPService } from './cfp.service';
import { Resolver, ResolveProperty, Parent, Args } from '@nestjs/graphql';
import { Query, Injectable } from '@nestjs/common';

@Resolver('CallForPaper')
export class CFPResolver {
  constructor(private readonly cfpService: CFPService) {}

  @Query('callForPapers')
  async callForPapers(obj, args, context, info) {
    console.error('callForPapers');
    return await this.cfpService.findAll();
  }

  @Query('callForPaperById')
  async callForPaperById(@Args('id') id: string) {
    console.error('callForPaperById');
    return await this.cfpService.findOne(id);
  }

  @ResolveProperty('conference')
  async conference(@Parent() { id }) {
    return await this.cfpService.findConferenceByCFP(id);
  }
}
