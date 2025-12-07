// Drizzle ORM スキーマ定義（Cloudflare D1用）
import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';

// ユーザーテーブル
export const users = sqliteTable('users', {
  id: text().primaryKey(), // UUID文字列
  githubId: text('github_id').notNull().unique(),
  name: text(),
  email: text().unique(),
  image: text(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

// コンテンツテーブル
export const contents = sqliteTable(
  'contents',
  {
    id: text().primaryKey(), // UUID文字列
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    articleUrl: text('article_url').notNull(),
    articleTitle: text('article_title').notNull(),
    summary: text().notNull(),
    vocabulary: text().notNull(), // JSON文字列: VocabularyItem[]
    questions: text().notNull(), // JSON文字列: Question[]
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  },
  (table) => [
    index('user_id_idx').on(table.userId),
    index('created_at_idx').on(table.createdAt),
  ]
);
