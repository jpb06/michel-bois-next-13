import { pipe } from 'effect';

import { failIfOrphans } from './logic/fail-if-orphans.logic';
import { keepOrphanAssets } from './logic/keep-orphan-assets.logic';

export const ensureAllFilesHaveMetadata = (files: string[]) =>
  pipe(keepOrphanAssets(files), failIfOrphans);
