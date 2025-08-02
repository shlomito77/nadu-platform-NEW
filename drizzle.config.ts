import { defineConfig } from 'drizzle-orm/cli';

export default defineConfig({
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
});
