import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { CreateUpdateNoteDto } from './dto/create-update-note.dto';

import { NotesService } from './notes.service';
import { Note } from './schemas/note.schemas';
import { YupValidationPipe } from 'src/pipes/YupValidation';
import { noteValidionSchema } from './schemas/validation.schema';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @UsePipes(new YupValidationPipe(noteValidionSchema))
  @HttpCode(HttpStatus.CREATED)
  Create(@Body() createNoteDto: CreateUpdateNoteDto): Promise<Note> {
    return this.notesService.create(createNoteDto);
  }

  @Delete(':id')
  Remove(@Param('id') id: string): Promise<Note> {
    return this.notesService.remove(id);
  }

  @Patch(':id')
  @UsePipes(new YupValidationPipe(noteValidionSchema))
  Update(
    @Param('id') id: string,
    @Body() updateNoteDto: CreateUpdateNoteDto,
  ): Promise<Note> {
    return this.notesService.update(id, updateNoteDto);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Note> {
    return this.notesService.getById(id);
  }

  @Get()
  getAll(): Promise<Note[]> {
    return this.notesService.getAll();
  }

  @Get('stats')
  getStats(): Promise<Note[]> {
    return this.notesService.getAll();
  }
}
