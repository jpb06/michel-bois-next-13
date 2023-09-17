import { Effect } from 'effect';
import type { Metadata } from 'sharp';

import { tapFileStorage } from '~/server';

import type { SeededAsset } from '../../../data/assets.data';
import { persistAsset } from '../db/persist-asset.db';

export const uploadAndPersist = (
  asset: SeededAsset,
  fileData: Buffer,
  metadata: Metadata,
  placeholderDataUrl: string,
) =>
  Effect.all(
    [
      tapFileStorage(({ uploadFile }) =>
        uploadFile({
          key: asset.fileName,
          bucketName: 'assets',
          data: fileData,
          contentType: 'image/jpeg',
        }),
      ),
      persistAsset({
        name: asset.name,
        description: asset.description,
        month: asset.month,
        year: asset.year,
        documentKey: asset.fileName,
        placeholderDataUri: placeholderDataUrl,
        width: metadata.width ?? 0,
        height: metadata.height ?? 0,
      }),
    ],
    { concurrency: 'unbounded' },
  );
