import { pipe, Effect } from 'effect';

import { createAssets } from '../common-datasets/assets';

export const seedDevEnv = () =>
  pipe(
    Effect.succeed(
      console.info('💾 Seeding database with development dataset.'),
    ),
    Effect.flatMap(() =>
      pipe(
        Effect.all([
          createAssets(),
          //...
        ]),
      ),
    ),
  );
