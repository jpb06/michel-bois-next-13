import path from 'path';

import { Effect } from 'effect';

export const getFilePath = (fileName: string) =>
  Effect.sync(() =>
    path.join(__dirname, `./../../../../../data/img/${fileName}`),
  );
