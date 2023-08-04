import createHttpError from 'http-errors';
import * as yup from 'yup';
import { NoteSchema } from './note.schemas';
export const noteValidionSchema = yup
  .object()
  .shape({
    title: yup.string().required(),
    content: yup.string(),
    category: yup
      .string()
      .transform((val: string) => {
        if (val === 'Task' || val === 'Idea' || val === 'Random Thought')
          return val;
        else
          throw new yup.ValidationError(
            new yup.ValidationError(
              'category may be only "Task" or "Idea" or "Random Thought"',
            ),
          );
      })
      .required(),
    dates: yup.string(),
    archived: yup.boolean().required(),
  })
  .transform((current, original) => {
    const invalid: yup.ValidationError[] = [];
    const keySet = new Set(Object.keys(NoteSchema.obj));
    Object.keys(current).forEach((el) => {
      if (keySet.has(el) === false)
        invalid.push(new yup.ValidationError(`field: "${el}" is not expected`));
    });
    keySet.forEach((el) => {
      if (current[el] === undefined)
        invalid.push(new yup.ValidationError(`Field: "${el}" missed in body`));
    });
    if (invalid.length > 0) throw new yup.ValidationError(invalid);
    return current;
  });
