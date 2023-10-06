import { Config } from 'drizzle-kit'

export default {
    schema: './drizzle/lib/schema.ts',
    out: './drizzle/src',
    driver: 'better-sqlite',
} satisfies Config
