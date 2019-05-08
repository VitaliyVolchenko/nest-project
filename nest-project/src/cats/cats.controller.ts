import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {} 

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Cat> {
    console.log('ID', id)
    return this.catsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateCatDto: CreateCatDto, @Param('id') id): Promise<Cat> {
    return this.catsService.update(id, updateCatDto);
  }

}

