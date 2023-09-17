import chalk from 'chalk';
import { Effect } from 'effect';

import { assetsSeedData } from './data/assets.data';
import { getFolderFiles } from './logic/get-folder-files.logic';
import { integrateItem } from './logic/integrate-item';

const getOrphans = (files: string[]) =>
  files.filter(
    (path) => !assetsSeedData.some(({ fileName }) => path.endsWith(fileName)),
  );

const displayOrphansError = (orphans: string[]) =>
  chalk.red.bold(
    `Invalid input. Missing data for files: ${orphans
      .map((path) => `\n- ${path.substring(path.lastIndexOf('/') + 1)}`)
      .join('')}`,
  );

export const createAssets = () =>
  Effect.gen(function* (_) {
    const files = yield* _(getFolderFiles('./../data/img/*.*'));

    const orphans = getOrphans(files);
    if (orphans.length > 0) {
      displayOrphansError(orphans);
      return;
    }

    yield* _(
      Effect.forEach(files, integrateItem, {
        concurrency: 5,
      }),
    );
  });
