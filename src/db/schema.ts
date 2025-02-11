import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const experiencesTable = sqliteTable('experiences', {
	id: integer().primaryKey(),
  title: text().notNull(),
  sector: text(),
  jobTitle: text().notNull(),
  start: text().notNull(),
  end: text().notNull(),
  description: text(),
  logo: text().notNull(),
  tags: text({ mode: 'json' }).$type<string[]>(),
  locale: text({ enum: ["en", "fr"] }).default("en")
})

export type InsertExperience = typeof experiencesTable.$inferInsert
export type SelectExperience = typeof experiencesTable.$inferSelect

export const techstacksTable = sqliteTable('techstacks', {
	id: integer().primaryKey(),
  label: text().notNull(),
  title: text().notNull(),
  tags: text({ mode: 'json' }).$type<string[]>(),
})

export type InsertTechStack = typeof techstacksTable.$inferInsert
export type SelectTechStack = typeof techstacksTable.$inferSelect
