import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { migrateDbIfNeeded } from './migrations';

const DB_NAME = 'mydb.db';
const DB_PATH = `./${DB_NAME}`;

const resetDatabase = async () => {
  const fileInfo = await FileSystem.getInfoAsync(DB_PATH);

  if (fileInfo.exists) {
    await FileSystem.deleteAsync(DB_PATH, { idempotent: true });
    console.log('✅ SQLite DB reset');
  }
};

const initDatabase = async () => {
  // if (__DEV__) {
  //   await resetDatabase(); // only reset in development
  // }

  const db = await SQLite.openDatabaseAsync(DB_NAME);

  await migrateDbIfNeeded(db);
  return db;
};

export default initDatabase;
