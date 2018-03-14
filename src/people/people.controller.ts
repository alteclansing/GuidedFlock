import { Get, Controller } from '@nestjs/common';

@Controller('people')
export class PeopleController {
  results: any;
    @Get()
    getAll() {
        return 'hit this';
    }
	
}