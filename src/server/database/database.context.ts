import { PrismaClient } from '@prisma/client';
import { Context, Layer } from 'effect';

import { prisma } from './instance/prisma.instance';

export type Database = PrismaClient;

export const DatabaseContext = Context.Tag<Database>();

export const DatabaseLive = Layer.succeed(
  DatabaseContext,
  DatabaseContext.of(prisma),
);
