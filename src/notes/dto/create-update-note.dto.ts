import mongoose from 'mongoose';

export class CreateUpdateNoteDto {
  readonly title: string;
  readonly categoty: mongoose.Types.ObjectId;
  readonly content: string;
  readonly dates: string;
  readonly archived: boolean;
}
