import { PeopleService } from './people.service';
import { Get, Controller } from '@nestjs/common';

@Controller('people')
export class PeopleController {
    constructor(private peopleService: PeopleService) {}
  results: any;
    @Get()
    getAll() {
        return this.peopleService.findAll();
    }
}