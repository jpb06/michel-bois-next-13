import { Effect, pipe } from 'effect';

import { DatabaseContext } from '../database/database.context';
import type { Database } from '../database/database.context';

export const tapDatabase = <R, E, A>(
  effect: (db: Database) => Effect.Effect<R, E, A>,
) => pipe(DatabaseContext, Effect.flatMap(effect));
