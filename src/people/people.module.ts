import { PeopleService } from './people.service';
import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    controllers: [PeopleController],
    providers: [PeopleService],
    components: [],
})
export class PeopleModule {

}