import db from '../config/dbConfig.js';

export class UserRepository {
    constructor(db) {
        this.db = db;
    }

    async createUser(User) {
        const client = await db.connect();
        let clientId;
        try {
            await client.query('BEGIN');

            const clientResult = await client.query('INSERT INTO client_service.client (id, name, nickname, created_at, updated_at) VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING id',[User.name, User.nickname]);
            clientId = clientResult.rows[0].id;

            await client.query('INSERT INTO client_service.client_password (id, password_value, client_id, created_at, updated_at) VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING client_id',[User.password, clientId]);

            await client.query('COMMIT');

        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            // Release the client back to the pool
            client.release();
        }
        return clientId;
    }

    async getAllUsers(){
        return (await db.query("SELECT * FROM client_service.client")).rows;
    }

    async getUserById(userId){
        return (await db.query("SELECT * FROM client_service.client WHERE id = $1", [userId])).rows[0]
    }

    async updateUser(User, userId) {
        const client = await db.connect();
        let clientId;
        try {
            await client.query('BEGIN');

            const clientResult = await client.query('UPDATE client_service.client SET name = $1, nickname = $2, updated_at = NOW() WHERE id = $3 RETURNING id',[User.name, User.nickname, userId]);
            clientId = clientResult.rows[0].id;

            await client.query('UPDATE client_service.client_password SET password_value = $1, updated_at = NOW() WHERE client_id = $2 RETURNING client_id',[User.password, clientId]);

            await client.query('COMMIT');

        } catch (error) {
            await client.query('ROLLBACK');
            console.log(error.message)
            throw error;
        } finally {
            client.release();
        }
        return clientId;
    }

    async deleteUserById(userId) {
        return await db.query("DELETE FROM client_service.client WHERE id = $1 RETURNING 1", [userId])
    }
}