import 'dotenv/config';
import db from '../config/dbConfig.js';
import pgPromise from 'pg-promise';

const pgp = pgPromise();

export async function addNewUser(userBodyRequest){
    return await db.tx(async (t) => {
        const client = await t.one("INSERT INTO client_service.client (id, name, nickname, created_at, updated_at) VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING id",
        [userBodyRequest.name, userBodyRequest.nickname]);

        await t.one("INSERT INTO client_service.client_password (id, password_value, client_id, created_at, updated_at) VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING client_id", [userBodyRequest.password, client.id]);
        
        return client.id;
    });
}

export async function getAllUsers(){
    return await db.any("SELECT * FROM client_service.client");
}

export async function getUserById(userId){
    return await db.one("SELECT * FROM client_service.client WHERE id = $1", userId)
}

export async function updateUserById(userId, userBodyRequest){
    return await db.tx(async (t) => {
        const client = await t.one("UPDATE client_service.client SET name = $1, nickname = $2, updated_at = NOW() WHERE id = $3 RETURNING id",
        [userBodyRequest.name, userBodyRequest.nickname, userId]);

        await t.one("UPDATE client_service.client_password SET password_value = $1, updated_at = NOW() WHERE client_id = $2 RETURNING client_id", [userBodyRequest.password, userId]);
        
        return client.id;
    });
}

export async function deleteUserById(userId){
    await db.one("DELETE FROM client_service.client WHERE id = $1 RETURNING 1", userId)
    return userId
}