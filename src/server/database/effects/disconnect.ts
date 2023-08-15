import { Effect } from 'effect';

import { tapDatabase } from '~/server';

export const disconnect = () =>
  tapDatabase((db) => Effect.tryPromise(() => db.$disconnect()));
