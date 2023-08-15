import { Effect } from 'effect';

import { tapDatabase } from '~/server';

export const readAssets = tapDatabase(({ asset }) =>
  Effect.tryPromise(() => asset.findMany()),
);

export type ReadAssetsResult = Effect.Effect.Success<typeof readAssets>;
