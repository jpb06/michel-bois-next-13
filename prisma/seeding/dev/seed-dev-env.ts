import { Effect } from 'effect';

import { createAssets } from '../common-datasets/assets';

export const seedDevEnv = () =>
  Effect.gen(function* (_) {
    console.info('💾 Seeding database with development dataset.');

    return yield* _(
      Effect.all([
        createAssets(),
        //...
      ]),
    );
  });
