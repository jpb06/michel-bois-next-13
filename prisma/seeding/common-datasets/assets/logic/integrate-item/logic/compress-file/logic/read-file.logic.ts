import { Effect } from 'effect';
import { readFile as fsReadFile } from 'fs-extra';

export const readFile = Effect.flatMap<string, never, unknown, Buffer>((path) =>
  Effect.tryPromise(() => fsReadFile(path)),
);
