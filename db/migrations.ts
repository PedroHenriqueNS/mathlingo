import * as SQLite from 'expo-sqlite';

export async function migrateDbIfNeeded(db: SQLite.SQLiteDatabase) {
  const DATABASE_VERSION = 1.1;
  const result = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  const currentDbVersion = result?.user_version ?? 0;

  // Always reset the database by dropping existing tables
  // await db.execAsync(`
  //   DROP TABLE IF EXISTS activities;
  //   DROP TABLE IF EXISTS achievements;
  //   DROP TABLE IF EXISTS fires;
  // `);

  // if (currentDbVersion >= DATABASE_VERSION) return;

  // if (currentDbVersion === 0) {
  await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS activities (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, isDone BOOLEAN);
      CREATE TABLE IF NOT EXISTS achievements (id INTEGER PRIMARY KEY NOT NULL, slug TEXT NOT NULL, title TEXT NOT NULL, description TEXT);
      CREATE TABLE IF NOT EXISTS fires (id INTEGER PRIMARY KEY NOT NULL, date DATETIME DEFAULT (datetime('now', '-3 hours')));
    `);
  // await db.runAsync('INSERT INTO activities (value, intValue) VALUES (?, ?)', 'hello', 1);
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
