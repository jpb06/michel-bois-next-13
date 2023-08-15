import { Effect } from 'effect';
import sharp from 'sharp';

export const getSharpImage = Effect.flatMap<
  Buffer,
  never,
  unknown,
  sharp.Sharp
>((data) =>
  Effect.sync(() =>
    sharp(data)
      .resize({
        width: 800,
      })
      .jpeg({ mozjpeg: true, quality: 75 }),
  ),
);
