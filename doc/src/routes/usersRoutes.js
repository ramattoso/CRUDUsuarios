import express from "express";
import cors from "cors";
import { addUser, updateUser, getUsers, getUser, deleteUser} from "../controllers/usersController.js";
import { validateBody, validateParams, isUnique } from "../middleware/validations.js";
import { idSchema, userSchema } from "../schemas/schemasUsers.js";

// Rotas

const routes = (app) => {
    app.use(express.json());
    app.get('/users', getUsers);
    app.get('/user/:id', validateParams(idSchema), getUser);
    app.post('/user', validateBody(userSchema), isUnique(), addUser);
    app.put('/user/:id', validateBody(userSchema), validateParams(idSchema), updateUser);
    app.delete('/user/:id', validateParams(idSchema), deleteUser);
}

export default routes;