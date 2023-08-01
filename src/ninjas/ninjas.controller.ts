import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get(':id')
  getNinja(@Body('id') id: string) {
    return this.ninjasService.getNinja(+id);
  }

  @Get()
  getNinjas(@Query('weapon') weapon: string) {
    return this.ninjasService.getNinjas(weapon);
  }

  @Post()
  createNinja(@Body() createNinja: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinja);
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinja: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinja);
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
