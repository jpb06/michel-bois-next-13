import { Effect, pipe } from 'effect';

import { FileStorageContext } from '../cloud/file-storage.context';
import type { FileStorage } from '../cloud/file-storage.context';

export const tapFileStorage = <R, E, A>(
  effect: (db: FileStorage) => Effect.Effect<R, E, A>,
) => pipe(FileStorageContext, Effect.flatMap(effect));
