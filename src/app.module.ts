import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [PeopleModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
