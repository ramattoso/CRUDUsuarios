import db from '../config/dbConfig.js';

export class UserRepository {
    constructor(db) {
        this.db = db;
    }

    async createUser(User) {
        let client;
        await db.tx(async (t) => {
            client = await t.one("INSERT INTO client_service.client (id, name, nickname, created_at, updated_at) VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING id",
            [User.name, User.nickname]);
        
            await t.one("INSERT INTO client_service.client_password (id, password_value, client_id, created_at, updated_at) VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING client_id", [User.password, client.id]);
        });
        return client.id;
    }

    async getAllUsers(){
        return await db.any("SELECT * FROM client_service.client");
    }

    async getUserById(userId){
        return await db.one("SELECT * FROM client_service.client WHERE id = $1", userId)
    }

    async updateUser(User, userId) {
        let client;
        await db.tx(async (t) => {
            client = await t.one("UPDATE client_service.client SET name = $1, nickname = $2, updated_at = NOW() WHERE id = $3 RETURNING id",
            [User.name, User.nickname, userId]);
    
            await t.one("UPDATE client_service.client_password SET password_value = $1, updated_at = NOW() WHERE client_id = $2 RETURNING client_id", [User.password, userId]);
        });
        return client.id;
    }

    async deleteUserById(userId) {
        return await db.one("DELETE FROM client_service.client WHERE id = $1 RETURNING 1", userId)
    }
}