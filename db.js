import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: "100900",
  port: 5432,
});

export default pool;
