import { pipe, Effect, Layer } from 'effect';

import { DatabaseLive, R2FileStorageLive } from '~/server';

import { readAssets } from './db/read-assets.db';
import { getUrlForEachAsset } from './logic/get-url-for-each-asset.logic';

export const getAssets = () =>
  pipe(
    readAssets,
    getUrlForEachAsset,
    Effect.provideLayer(Layer.merge(DatabaseLive, R2FileStorageLive)),
  );

export type GetAssetsResult = Effect.Effect.Success<
  ReturnType<typeof getAssets>
>;
