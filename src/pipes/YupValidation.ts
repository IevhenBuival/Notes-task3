import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { Schema } from 'yup';
import { serializeValidationError } from '../utils/serializeErrors';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private schema: Schema<{}>) {}
  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      if (metadata.type === 'body')
        await this.schema.validate(value, {
          abortEarly: false,
          stripUnknown: true,
        });
      return value;
    } catch (e) {
      throw serializeValidationError(e);
    }
  }
}
