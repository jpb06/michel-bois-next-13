import { PutObjectCommand } from '@aws-sdk/client-s3';
import { Effect } from 'effect';

import { getBucket } from './get-bucket';
import { customError } from '../../../effect/custom-error';
import { fileStorageProvider } from '../providers/file-storage.provider';
import type { Bucket } from '../types/bucket.type';

export type UploadFileArgs = {
  bucketName: Bucket;
  key: string;
  data: Buffer;
  contentType?: string;
};

export const uploadFile = ({
  bucketName,
  key,
  data,
  contentType,
}: UploadFileArgs) =>
  Effect.gen(function* (_) {
    const [provider, bucket] = yield* _(
      Effect.all([fileStorageProvider, getBucket(bucketName)], {
        concurrency: 'unbounded',
      }),
    );

    yield* _(
      Effect.tryPromise({
        try: () =>
          provider.send(
            new PutObjectCommand({
              Body: data,
              ContentType: contentType,
              Key: key,
              Bucket: bucket,
            }),
          ),
        catch: customError('UploadFileUrlError'),
      }),
    );
  });
