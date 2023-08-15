import { Effect, pipe } from 'effect';

import { ensureAllFilesHaveMetadata } from './logic/ensure-all-files-have-metadata';
import { findAsset } from './logic/find-asset.logic';
import { getFolderFiles } from './logic/get-folder-files.logic';
import { integrateItem } from './logic/integrate-item';

const IntegrateEachFile = (files: string[]) =>
  Effect.flatMap(() =>
    Effect.forEach(
      files,
      (filePath) =>
        pipe(
          findAsset(filePath),
          Effect.flatMap((asset) => integrateItem(asset)),
        ),
      { concurrency: 5 },
    ),
  );

export const createAssets = () =>
  pipe(
    getFolderFiles('./../data/img/*.*'),
    Effect.flatMap((files) =>
      pipe(ensureAllFilesHaveMetadata(files), IntegrateEachFile(files)),
    ),
  );
