import 'dotenv/config'
// import { drizzle } from 'drizzle-orm/libsql'
import { drizzle } from 'drizzle-orm/better-sqlite3'

const db = drizzle(process.env.DB_FILE_NAME!)

export default db