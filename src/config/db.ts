import Database from "bun:sqlite"

export const db = new Database("database.sqlite")

export const initDB = () => {
  db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      role TEXT
    )
  `).run()
}