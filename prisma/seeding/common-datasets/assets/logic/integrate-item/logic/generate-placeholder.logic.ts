import { Effect } from 'effect';
import { sqip, SqipResult } from 'sqip';

const blurImage = (fileName: string, buffer: Buffer) =>
  Effect.tryPromise(
    () =>
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
      }) as Promise<SqipResult>,
  );

export const generatePlaceholder = (fileName: string, buffer: Buffer) =>
  Effect.gen(function* (_) {
    const result = yield* _(blurImage(fileName, buffer));

    return `data:image/svg+xml;base64,${result.content.toString('base64')}`;
  });
