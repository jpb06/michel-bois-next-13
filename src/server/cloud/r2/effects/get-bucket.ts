import { match } from 'ts-pattern';

import {
  assetsBucket,
  placeholdersBucket,
} from '../providers/file-storage.provider';
import type { Bucket } from '../types/bucket.type';

export const getBucket = (bucket: Bucket) =>
  match(bucket)
    .with('assets', () => assetsBucket)
    .with('placeholders', () => placeholdersBucket)
    .exhaustive();
