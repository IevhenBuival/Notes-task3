import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NotesService } from './notes.service';
import { Note, NoteSchema } from './schemas/note.schemas';
import { NotesController } from './notes.controller';

@Module({
  providers: [NotesService],
  controllers: [NotesController],
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
})
export class NotesModule {}
