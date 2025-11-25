import type { Database } from "./database";

export function test<Database, Table extends Database.Table<Database>>(
  database: Database,
  table: Table
) : { database: Database; table: Table } {
  return { database, table };
}
