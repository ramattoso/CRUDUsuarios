import 'dotenv/config';
import db from '../config/dbConfig.js';
import pgPromise from 'pg-promise';

const pgp = pgPromise();

export async function getAllUsers(){
    return await db.any("SELECT * FROM client_service.client");
}

export async function getUserById(userId){
    return await db.one("SELECT * FROM client_service.client WHERE id = $1", userId)
}

export async function deleteUserById(userId){
    await db.one("DELETE FROM client_service.client WHERE id = $1 RETURNING 1", userId)
    return userId
}