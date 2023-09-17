export class BaseError {
  readonly message: string = 'Unknown error';

  constructor(
    readonly _tag: string,
    error: unknown,
  ) {
    if (error instanceof Error) {
      this.message = error.message;
    }
  }
}
