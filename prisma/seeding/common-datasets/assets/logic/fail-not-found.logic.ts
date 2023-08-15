import { Effect } from 'effect';

export const failNotFound = (filePath: string) =>
  Effect.fail(`Asset ${filePath} not found in assetsSeedData`);
