import { PutObjectCommand } from '@aws-sdk/client-s3';
import { pipe, Effect } from 'effect';

import { getBucket } from './get-bucket';
import { fileStorageProvider } from '../providers/file-storage.provider';
import type { Bucket } from '../types/bucket.type';

export type UploadFileArgs = {
  bucket: Bucket;
  key: string;
  data: Buffer;
  contentType?: string;
};

export const uploadFile = ({
  bucket,
  key,
  data,
  contentType,
}: UploadFileArgs) =>
  pipe(
    Effect.all([fileStorageProvider, getBucket(bucket)]),
    Effect.flatMap(([provider, bucket]) =>
      Effect.tryPromise(() =>
        provider.send(
          new PutObjectCommand({
            Body: data,
            ContentType: contentType,
            Key: key,
            Bucket: bucket,
          }),
        ),
      ),
    ),
    Effect.flatMap((_) => Effect.unit),
  );
