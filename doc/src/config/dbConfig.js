import pg from 'pg';
import fs from 'node:fs';
import {join} from 'node:path';
import { fileURLToPath } from 'url';
import path from 'path'
import 'dotenv/config';

// Define __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações do banco de dados
const {Pool} = pg;
const db = new Pool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })

//Construção do banco
const filePath = join(__dirname, 'dbConfig.sql');
const sqlQuery = fs.readFileSync(filePath, 'utf-8');
await db.query(sqlQuery);

export default db;