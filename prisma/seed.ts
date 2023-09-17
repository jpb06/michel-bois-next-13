import chalk from 'chalk';
import dotenv from 'dotenv-flow';
import { Effect, Layer, pipe } from 'effect';

dotenv.config({
  silent: true,
});

import { DatabaseLive, R2FileStorageLive } from '~/server';
import { disconnect } from '~/server/database/effects/disconnect';

import { seedDevEnv } from './seeding/dev/seed-dev-env';

const task = pipe(
  seedDevEnv(),
  Effect.flatMap(disconnect),
  Effect.provideLayer(Layer.merge(DatabaseLive, R2FileStorageLive)),
);

Effect.runPromise(task).catch((error) => {
  const errorCauses = JSON.parse(JSON.stringify(error, null, 2)).cause
    .errors as { message: string }[];
  console.error(
    chalk.bold.bgYellowBright(
      `😵 ${errorCauses.length} error${
        errorCauses.length > 1 ? 's' : ''
      } occurred  \n`,
    ),
  );

  for (const e of errorCauses) {
    const [errorType, ...message] = e.message.split('\n');

    const chunks = errorType.split(':');
    const matches = [...chunks[0].matchAll(/Error\((.*)\)/g)];
    const errorName = matches.length === 0 ? chunks[1] : ` ${matches[0][1]}`;

    console.error(chalk.bold.bgRedBright(`💥${errorName}  `));
    console.error(`${chalk.hex('#a37e3e')(message.join('\n'))}\n`);
  }

  process.exit(1);
});
