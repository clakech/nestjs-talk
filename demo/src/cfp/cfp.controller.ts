import { CallForPaper } from './entities/call-for-paper.entity';
import {
  Get,
  Controller,
  Post,
  Param,
  NotFoundException,
  Body,
  Delete,
  Patch,
  Put,
  ForbiddenException,
} from '@nestjs/common';
import { CFPService } from './cfp.service';
import { updateLocale } from '../../node_modules/moment';

@Controller('call-for-papers')
export class CFPController {
  constructor(private readonly cfpService: CFPService) {}

  @Post()
  create(@Body() cfp: CallForPaper) {
    return this.cfpService.create(cfp);
  }

  @Get()
  findAll(): CallForPaper[] {
    return this.cfpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): CallForPaper {
    const cfp = this.cfpService.findOne(id);

    if (!cfp) {
      throw new NotFoundException();
    }

    return cfp;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newCFP: CallForPaper): CallForPaper {
    if (newCFP.id !== id) {
      throw new ForbiddenException();
    }

    const oldCFP = this.cfpService.findOne(id);
    if (!oldCFP) {
      throw new NotFoundException();
    }

    return this.cfpService.update(id, newCFP);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    const cfp = this.cfpService.findOne(id);

    if (!cfp) {
      throw new NotFoundException();
    }

    this.cfpService.delete(id);
  }
}
