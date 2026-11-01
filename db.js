import "dotenv/config";

import { Pool } from "pg";

const databaseConfig = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT ? Number(process.env.PG_PORT) : undefined,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    };

export const pool = new Pool(databaseConfig);
