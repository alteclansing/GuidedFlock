import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';

@Module({
    imports: [],
    controllers: [PeopleController],
    components: [],
})
export class PeopleModule {

}