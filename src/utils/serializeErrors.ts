import { HttpException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'yup';

interface IError {
  path: string | undefined;
  message: string;
}
export const serializeValidationError = (err: Error) => {
  const invalid: IError[] = [];
  if (err instanceof ValidationError)
    err.inner.map((value) => {
      invalid.push({ path: value.path, message: value.message });
    });
  else invalid.push({ path: 'All', message: JSON.stringify(err) });
  return new HttpException(JSON.stringify(invalid), HttpStatus.BAD_REQUEST);
};
