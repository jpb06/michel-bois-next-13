import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl as awsGetSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Effect } from 'effect';

import { getBucket } from './get-bucket';
import { customError } from '../../../effect/custom-error';
import { fileStorageProvider } from '../providers/file-storage.provider';
import type { Bucket } from '../types/bucket.type';

const oneHourDuration = 60 * 60;

export const getFileUrl = (documentKey: string, bucketName: Bucket) =>
  Effect.gen(function* (_) {
    const [provider, bucket] = yield* _(
      Effect.all([fileStorageProvider, getBucket(bucketName)], {
        concurrency: 'unbounded',
      }),
    );

    return yield* _(
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
        catch: customError('GetFileUrlError'),
      }),
    );
  });
