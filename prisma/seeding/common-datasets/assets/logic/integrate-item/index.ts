import { pipe, Effect } from 'effect';

import { compressFile } from './logic/compress-file';
import { generatePlaceholder } from './logic/generate-placeholder.logic';
import { reportFileUpload } from './logic/report-file-upload.logic';
import { uploadAndPersist } from './logic/upload-and-persist.logic';
import { SeededAsset } from '../../types/seeded-asset.type';

export const integrateItem = (asset: SeededAsset) =>
  pipe(
    compressFile(asset.fileName),
    Effect.flatMap(([fileData, metadata]) =>
      pipe(
        generatePlaceholder(asset.fileName, fileData),
        uploadAndPersist(asset, fileData, metadata),
      ),
    ),
    reportFileUpload(asset.fileName),
    Effect.map(([, asset]) => asset),
  );
