import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const items = pgTable("items", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text().notNull(),
  quadrant: numeric().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  durationInMinutes: numeric().notNull(),
  desire: numeric().notNull(),
  score: numeric().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});
