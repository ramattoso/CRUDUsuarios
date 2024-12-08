import express from "express";
import cors from "cors";
import { addUser, updateUser, getUsers, getUser, deleteUser} from "../controllers/usersController.js";
import { validateBody, validateParams, isUnique, existsNickname } from "../middleware/validations.js";
import { idSchema, NicknameSchema, userSchema } from "../schemas/schemasUsers.js";

// Rotas

const routes = (app) => {
    app.use(express.json());
    app.get('/users', getUsers);
    app.get('/user/:nickname', validateParams(NicknameSchema), getUser);
    app.post('/user', validateBody(userSchema), isUnique(), addUser);
    app.put('/user', validateBody(userSchema), existsNickname(), updateUser);
    app.delete('/user/:nickname', validateParams(NicknameSchema), deleteUser);
}

export default routes;