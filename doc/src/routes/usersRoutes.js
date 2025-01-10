import express from "express";
import { addUser, getUsers, getUser, updateUser, deleteUser} from "../controllers/usersController.js";
//import { validateBody, isUnique } from "../middleware/validations.js";
import { uuidSchema } from "../schemas/schemasUsers.js";

// Rotas


const routes = (app) => {
    app.use(express.json());
    app.get('/users', getUsers);
    app.get('/user/:id', getUser);
    app.post('/user', addUser);
    app.put('/user/:id', uuidSchema, updateUser);
    app.delete('/user/:id', deleteUser);
}

export default routes;