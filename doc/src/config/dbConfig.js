import pgPromise from 'pg-promise';
import {join} from 'node:path';
import { fileURLToPath } from 'url';
import path from 'path'
import 'dotenv/config';

// Define __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Configurações do banco de dados
const pgp = pgPromise();
const db = pgp("postgres://postgres:senha@localhost:5432/postgres");

const filePath = join(__dirname, 'dbConfig.sql');
const query = new pgp.QueryFile(filePath);
db.query(query);

export default db;