import { pipe, Effect } from 'effect';
import type { ConfigError } from 'effect/ConfigError';

import { tapFileStorage } from '~/server';
import type { FileStorage } from '~/server';

import type { GetFileUrlError } from '../../../../../../server/cloud/r2/effects';
import type { ReadAssetsResult } from '../db/read-assets.db';

export type GetUrlForEachAssetResultItem = Pick<
  ReadAssetsResult[number],
  'name' | 'placeholderDataUri' | 'width' | 'height'
> & {
  url: string;
};

export const getUrlForEachAsset = Effect.flatMap<
  ReadAssetsResult,
  FileStorage,
  ConfigError | GetFileUrlError,
  GetUrlForEachAssetResultItem[]
>((assets) =>
  tapFileStorage(({ getFileUrl }) =>
    Effect.forEach(
      assets,
      ({ documentKey, placeholderDataUri, name, width, height }) =>
        pipe(
          getFileUrl(documentKey, 'assets'),
          Effect.map((url) => ({
            url,
            placeholderDataUri,
            name,
            width,
            height,
          })),
        ),
    ),
  ),
);
