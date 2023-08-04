import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop()
  title: string;

  @Prop()
  category: string;
  @Prop()
  content: string;
  @Prop()
  dates: string;
  @Prop()
  archived: boolean;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
