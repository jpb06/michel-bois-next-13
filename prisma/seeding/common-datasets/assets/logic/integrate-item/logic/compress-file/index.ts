import { pipe } from 'effect';

import { exportImage } from './logic/export-image.logic';
import { getFilePath } from './logic/get-file-path.logic';
import { getSharpImage } from './logic/get-sharp-image.logic';
import { readFile } from './logic/read-file.logic';

export const compressFile = (fileName: string) =>
  pipe(getFilePath(fileName), readFile, getSharpImage, exportImage);
