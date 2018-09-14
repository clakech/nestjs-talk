import { Conference } from './conference.entity';

export interface CallForPaper {
  id?: string;
  endDate?: Date;
  url?: string;
  conference?: Conference;
}
