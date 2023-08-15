import dotenv from 'dotenv-flow';
import { Effect, Layer, pipe } from 'effect';

dotenv.config({
  silent: true,
});

import { DatabaseLive, R2FileStorageLive } from '~/server';
import { disconnect } from '~/server/database/effects/disconnect';

import { seedDevEnv } from './seeding/dev/seed-dev-env';

const task = pipe(
  seedDevEnv(),
  Effect.catchAll((error) => Effect.fail(error)),
  Effect.flatMap(disconnect),
  Effect.provideLayer(Layer.merge(DatabaseLive, R2FileStorageLive)),
);

Effect.runPromise(task).catch((e) => {
  console.error(e);
  process.exit(1);
});
