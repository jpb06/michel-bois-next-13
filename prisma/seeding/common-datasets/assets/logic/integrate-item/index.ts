import chalk from 'chalk';
import { Effect } from 'effect';

import { compressFile } from './logic/compress-file.logic';
import { generatePlaceholder } from './logic/generate-placeholder.logic';
import { uploadAndPersist } from './logic/upload-and-persist.logic';
import { assetsSeedData } from '../../data/assets.data';
import type { SeededAsset } from '../../data/assets.data';

const findSeededAsset = (filePath: string) =>
  assetsSeedData.find(({ fileName }) =>
    filePath.endsWith(fileName),
  ) as SeededAsset;

export const integrateItem = (filePath: string) =>
  Effect.gen(function* (_) {
    const asset = findSeededAsset(filePath);

    const [fileData, metadata] = yield* _(compressFile(asset.fileName));

    const placeholderDataUrl = yield* _(
      generatePlaceholder(asset.fileName, fileData),
    );

    const [, persistedAsset] = yield* _(
      uploadAndPersist(asset, fileData, metadata, placeholderDataUrl),
    );

    console.info(chalk.green.bold(`'${asset.fileName}' added`));

    return persistedAsset;
  });
