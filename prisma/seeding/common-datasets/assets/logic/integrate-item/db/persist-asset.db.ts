import { Effect } from 'effect';

import { tapDatabase } from '~/server';

import { SeededAsset } from '../../../types/seeded-asset.type';

type AssetInput = Pick<
  SeededAsset,
  'name' | 'description' | 'month' | 'year'
> & {
  documentKey: string;
  placeholderDataUri: string;
  width: number;
  height: number;
};

export const persistAsset = (data: AssetInput) =>
  tapDatabase(({ asset }) =>
    Effect.tryPromise(() =>
      asset.create({
        data,
      }),
    ),
  );
