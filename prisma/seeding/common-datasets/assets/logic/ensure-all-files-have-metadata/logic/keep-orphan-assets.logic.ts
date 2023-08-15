import { Effect } from 'effect';

import { assetsSeedData } from '../../../data/assets.data';

export const keepOrphanAssets = (files: string[]) =>
  Effect.sync(() =>
    files.filter(
      (path) => !assetsSeedData.some(({ fileName }) => path.endsWith(fileName)),
    ),
  );
