import type { Config } from 'drizzle-kit'

export default {
    schema: './drizzle/lib/schema.ts',
    out: './drizzle/src',
    driver: 'better-sqlite',
    dbCredentials: {
        url: './sqite.db',
    },
} satisfies Config
