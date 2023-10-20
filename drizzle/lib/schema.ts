import { drizzle } from 'drizzle-orm/better-sqlite3'
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'

import Database from 'better-sqlite3'

import {
    sqliteTable,
    integer,
    uniqueIndex,
    text,
    index,
} from 'drizzle-orm/sqlite-core'
import { pgEnum } from 'drizzle-orm/pg-core'

const sqlite = new Database('sqite.db')
const db: BetterSQLite3Database = drizzle(sqlite)

export const continentEnum = pgEnum('continentEnum', [
    'Africa',
    'North America',
    'South America',
    'Asia',
    'Europe',
])

export const employee = sqliteTable(
    'employee',
    {
        id: integer('id', { mode: 'number' }).primaryKey({
            autoIncrement: true,
        }),
        fullName: text('full_name'),
        salary: integer('salary'),
    },
    (table) => ({
        fullNameIdx: uniqueIndex('full_name_idx').on(table.fullName),
    })
)

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

export const cities = sqliteTable(
    'cities',
    {
        id: integer('id').primaryKey(),
        name: text('name'),
        countryId: integer('country_id').references(() => countries.id),
    },
    (table) => ({
        nameIdx: uniqueIndex('name_idx').on(table.name),
    })
)

export const users = sqliteTable(
    'users',
    {
        id: integer('id').primaryKey(),
        fullname: text('full_name'),
        phone: integer('phone'),
    },
    (table) => {
        return {
            fullnameIdx: index('fullname_idx').on(table.fullname),
            phoneIdx: uniqueIndex('phone_idx').on(table.phone),
        }
    }
)

export type User = typeof users.$inferSelect
export type InsertUser = typeof users.$inferInsert

const result: User[] = db.select().from(users).all()
