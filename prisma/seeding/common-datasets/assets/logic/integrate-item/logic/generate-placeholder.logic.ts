import { pipe, Effect } from 'effect';
import { sqip, SqipResult } from 'sqip';

export const generatePlaceholder = (fileName: string, buffer: Buffer) =>
  pipe(
    Effect.tryPromise(() =>
      sqip({
        plugins: [
          {
            name: 'sqip-plugin-primitive',
            options: {
              numberOfPrimitives: 16,
              rep: 8,
            },
          },
        ],
        input: buffer,
        outputFileName: `${fileName.substring(
          0,
          fileName.lastIndexOf('.'),
        )}.svg`,
      }),
    ),
    Effect.map(
      (result) =>
        `data:image/svg+xml;base64,${(result as SqipResult).content.toString(
          'base64',
        )}`,
    ),
  );
