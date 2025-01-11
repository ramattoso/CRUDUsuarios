import express from "express";
import { addUser, getUsers, getUser, updateUser, deleteUser} from "../controllers/UserController.js";
import { validateParams, validateBody } from "../middleware/ErrorHandlers.js";
import { userSchema, uuidSchema } from "../schemas/UserSchemas.js";

// Rotas

const routes = (app) => {
    app.use(express.json());
    app.get('/users', getUsers);
    app.get('/user/:id', validateParams(uuidSchema), getUser);
    app.post('/user', validateBody(userSchema), addUser);
    app.put('/user/:id', validateParams(uuidSchema), updateUser);
    app.delete('/user/:id', validateParams(uuidSchema), deleteUser);
}

export default routes;