import { ConfigError, Context, Effect, Layer } from 'effect';

import type { UploadFileArgs, GetFileUrlError } from './r2/effects';
import { uploadFile, getFileUrl } from './r2/effects';
import type { Bucket } from './r2/types/bucket.type';

export interface FileStorage {
  readonly getFileUrl: (
    fileName: string,
    bucket: Bucket,
  ) => Effect.Effect<never, ConfigError.ConfigError | GetFileUrlError, string>;
  readonly uploadFile: (
    args: UploadFileArgs,
  ) => Effect.Effect<never, unknown, void>;
}

export const FileStorageContext = Context.Tag<FileStorage>();

export const R2FileStorageLive = Layer.succeed(
  FileStorageContext,
  FileStorageContext.of({
    getFileUrl,
    uploadFile,
  }),
);
