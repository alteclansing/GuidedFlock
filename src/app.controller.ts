import { Get, Controller, HttpStatus } from '@nestjs/common';
import { getDbConnection } from './database/index'
import { HttpException } from '@nestjs/core';

@Controller()
export class AppController {
  @Get()
  handle() {
     throw new HttpException('There is no provided resource here', HttpStatus.BAD_REQUEST);
    }
  }
