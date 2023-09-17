import { BaseError } from './base-error';

export const customError = (name: string) => (error: unknown) =>
  new BaseError(name, error);
