import { Asset } from '@prisma/client';
import { Effect } from 'effect';

import { tapFileStorage } from '~/server';
import type { FileStorage, Database } from '~/server';

import { ImageMetadata } from '../../../types/image-metadata.type';
import { SeededAsset } from '../../../types/seeded-asset.type';
import { persistAsset } from '../db/persist-asset.db';

export const uploadAndPersist = (
  asset: SeededAsset,
  fileData: Buffer,
  metadata: ImageMetadata,
) =>
  Effect.flatMap<string, FileStorage | Database, unknown, [void, Asset]>(
    (placeholderDataUrl) =>
      Effect.all(
        [
          tapFileStorage(({ uploadFile }) =>
            uploadFile({
              key: asset.fileName,
              bucket: 'assets',
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
      ),
  );
