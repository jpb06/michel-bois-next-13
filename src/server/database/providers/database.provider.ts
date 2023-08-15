import { Effect, Config } from 'effect';

export const databaseUrl = Effect.config(Config.string('DATABASE_URL'));
