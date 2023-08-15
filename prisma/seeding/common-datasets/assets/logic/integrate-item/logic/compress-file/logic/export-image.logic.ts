import { Effect, pipe } from 'effect';
import sharp from 'sharp';

import { ImageMetadata } from '../../../../../types/image-metadata.type';

export type ExportImageResult = [Buffer, ImageMetadata];

export const exportImage = Effect.flatMap<
  sharp.Sharp,
  never,
  unknown,
  ExportImageResult
>((image) =>
  Effect.all(
    [
      Effect.tryPromise(() => image.toBuffer()),
      pipe(
        Effect.tryPromise(() => image.metadata()),
        Effect.map(({ height, width }) => ({
          height,
          width,
        })),
      ),
    ],
    {
      concurrency: 'unbounded',
    },
  ),
);
