import mongoose from 'mongoose';

export class CreateUpdateNoteDto {
  readonly title: string;
  readonly category: string;
  readonly content: string;
  readonly dates: string;
  readonly archived: boolean;
}
