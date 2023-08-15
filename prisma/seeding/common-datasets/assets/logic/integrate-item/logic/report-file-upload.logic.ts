import { Asset } from '@prisma/client';
import chalk from 'chalk';
import { Effect } from 'effect';

export const reportFileUpload = (fileName: string) =>
  Effect.tap<[void, Asset], [void, Asset], never, never, void>(() =>
    Effect.sync(() => console.info(chalk.green.bold(`'${fileName}' added`))),
  );
