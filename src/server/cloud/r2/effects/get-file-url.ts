import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl as awsGetSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Effect, pipe } from 'effect';

import { getBucket } from './get-bucket';
import { fileStorageProvider } from '../providers/file-storage.provider';
import type { Bucket } from '../types/bucket.type';

const oneHourDuration = 60 * 60;

export class GetFileUrlError {
  readonly _tag = 'GetFileUrlError';

  constructor(readonly message: string) {}
}

export const getFileUrl = (documentKey: string, bucket: Bucket) =>
  pipe(
    Effect.all([fileStorageProvider, getBucket(bucket)]),
    Effect.flatMap(([provider, bucket]) =>
      Effect.tryPromise({
        try: () =>
          awsGetSignedUrl(
            provider,
            new GetObjectCommand({
              Bucket: bucket,
              Key: documentKey,
            }),
            {
              expiresIn: oneHourDuration,
            },
          ),
        catch: (error) =>
          new GetFileUrlError((error as { message: string }).message),
      }),
    ),
  );
