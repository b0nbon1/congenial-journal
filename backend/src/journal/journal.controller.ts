import { IJournal } from './journal.interface';
import { JournalService } from './journal.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('journal')
export class JournalController {

  constructor(private journalService: JournalService) {
    
  }
  @Post()
  async create(@Body() data: IJournal): Promise<any> {
    return this.journalService.createJournal(data)
  }
}
