import { CallForPaper } from './entities/call-for-paper.entity';
import { Injectable } from '@nestjs/common';
import moment from 'moment';
import uuid from 'uuid/v1';

@Injectable()
export class CFPService {
  private callForPapers: CallForPaper[] = [
    {
      id: uuid(),
      url: 'http://2018.agiletour-lille.org/cfp/',
      endDate: moment('2018-09-30').toDate(),
      conference: {
        name: 'Agile Tour Lille',
        location: 'Lille, France',
        startDate: moment('2018-11-08').toDate(),
        endDate: moment('2018-11-09').toDate(),
        url: 'http://2018.agiletour-lille.org/',
        keywords: [
          'Méthodes agiles',
          'Software Craftsmanship',
          'DDD',
          'TDD',
          'BDD',
        ],
      },
    },
  ];

  create(cfp: CallForPaper): CallForPaper {
    cfp.id = uuid();

    this.callForPapers.push(cfp);

    return cfp;
  }

  findAll(): CallForPaper[] {
    return this.callForPapers;
  }

  findOne(id: string): CallForPaper {
    return this.callForPapers.find(cfp => cfp.id === id);
  }

  update(id: string, newCFP: CallForPaper) {
    const oldCFP = this.callForPapers.find(cfp => cfp.id === id);

    this.callForPapers = this.callForPapers.filter(cfp => cfp.id !== id);
    newCFP.id = oldCFP.id;
    this.callForPapers.push(newCFP);

    return newCFP;
  }

  delete(id: string): void {
    this.callForPapers = this.callForPapers.filter(cfp => cfp.id !== id);
  }
}
