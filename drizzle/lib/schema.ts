import { drizzle } from 'drizzle-orm/better-sqlite3'
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'

import Database from 'better-sqlite3'

import { sqliteTable, integer } from 'drizzle-orm/sqlite-core'

const sqlite = new Database('sqite.db')
const db: BetterSQLite3Database = drizzle(sqlite)

const employee = sqliteTable('employee', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
})
