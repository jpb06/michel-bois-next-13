import chalk from 'chalk';
import { Effect } from 'effect';

export const failIfOrphans = Effect.flatMap<string[], never, string, void>(
  (missingEntries) =>
    Effect.if(missingEntries.length > 0, {
      onTrue: Effect.fail(
        chalk.red.bold(
          `Invalid input. Missing data for files: ${missingEntries
            .map((path) => `\n- ${path.substring(path.lastIndexOf('/') + 1)}`)
            .join('')}`,
        ),
      ),
      onFalse: Effect.unit,
    }),
);
