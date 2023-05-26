import { createPool } from "mysql2/promise";
export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "prueba",
    database: "BaseDatos",
    port: 3306,
});