import { HttpException, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateUpdateNoteDto } from './dto/create-update-note.dto';
import { Note, NoteDocument } from './schemas/note.schemas';

import { recalcTotal } from '../utils/calcTotal';
import { ITotal, ITotalInput } from '../types/ITotal';
import { notes } from '../data/data';

@Injectable()
export class NotesService {
  //inject mongo db model
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {
    this.Prepopulate();
  }

  async getAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async getById(id: string): Promise<Note | null> {
    if (!mongoose.isValidObjectId(id))
      throw new HttpException('Invalid note ID', 404);
    const searchedNote = await this.noteModel.findById(id);
    if (!searchedNote) {
      throw new HttpException('note with id is not found (id:' + id + ')', 404);
    }
    return searchedNote;
  }

  async create(noteDto: CreateUpdateNoteDto): Promise<Note> {
    const newNote = new this.noteModel(noteDto);
    return newNote.save();
  }

  async remove(id: string): Promise<Note | null> {
    if (!mongoose.isValidObjectId(id))
      throw new HttpException('Invalid note ID', 404);
    return this.noteModel.findByIdAndRemove(id);
  }

  async update(id: string, noteDto: CreateUpdateNoteDto): Promise<Note> {
    if (!mongoose.isValidObjectId(id))
      throw new HttpException('Invalid note ID', 404);
    const searchedNote = await this.noteModel.findById(id).exec();
    if (!searchedNote) {
      throw new HttpException('note with id is not found (id:' + id + ')', 404);
    }
    Object.keys(noteDto).forEach((key) => {
      searchedNote[key] = noteDto[key];
    });

    return searchedNote.save();
  }

  async getStats(): Promise<ITotal[]> {
    const notes = await this.noteModel.find().exec();
    return recalcTotal(notes as ITotalInput[]);
  }

  async Prepopulate() {
    const existNotes = await this.noteModel.find().exec();
    if (existNotes.length === 0) {
      notes.map(async (el) => {
        await this.create(el);
      });
    }
  }
}
