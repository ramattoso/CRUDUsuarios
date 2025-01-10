import express from "express";
import { addUser, getUsers, getUser, updateUser, deleteUser} from "../controllers/usersController.js";
import { validateParams, validateBody } from "../middleware/validations.js";
import { userSchema, uuidSchema } from "../schemas/schemasUsers.js";

// Rotas

const routes = (app) => {
    app.use(express.json());
    app.get('/users', validateBody(userSchema), getUsers);
    app.get('/user/:id', getUser);
    app.post('/user', addUser);
    app.put('/user/:id', validateParams(uuidSchema), updateUser);
    app.delete('/user/:id', deleteUser);
}

export default routes;