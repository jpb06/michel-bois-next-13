import { Effect } from 'effect';

import { assetsSeedData } from '../data/assets.data';
import { SeededAsset } from '../types/seeded-asset.type';

export const findAsset = (
  filePath: string,
): Effect.Effect<never, string, SeededAsset> =>
  Effect.sync(() => {
    const foundAsset = assetsSeedData.find(({ fileName }) =>
      filePath.endsWith(fileName),
    );

    return foundAsset as SeededAsset;
  });
