import { Journal } from './journal.entity';
import { IJournal } from './journal.interface';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JournalService {
  constructor(
    @InjectRepository(Journal)
    private journalRepository: Repository<Journal>
  ) {}

  createJournal(data: IJournal): Promise<Journal> {
    return this.journalRepository.save(data);
  }
}
