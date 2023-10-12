import { drizzle } from 'drizzle-orm/better-sqlite3'
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'

import Database from 'better-sqlite3'

import {
    sqliteTable,
    integer,
    uniqueIndex,
    text,
} from 'drizzle-orm/sqlite-core'

const sqlite = new Database('sqite.db')
const db: BetterSQLite3Database = drizzle(sqlite)

export const employee = sqliteTable('employee', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
})

export const countries = sqliteTable(
    'countries',
    {
        id: integer('id', { mode: 'number' }).primaryKey({
            autoIncrement: true,
        }),
        name: text('name'),
    },
    (countries) => {
        return {
            nameIdx: uniqueIndex('nameIdx').on(countries.name),
        }
    }
)

export const cities = sqliteTable('cities', {
    id: integer('id').primaryKey(),
    name: text('name'),
    countryId: integer('country_id').references(() => countries.id),
})
