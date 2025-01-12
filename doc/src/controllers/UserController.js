import { validateErrorMessage } from "../middleware/ErrorsHandler.js";
import { getAllUsers, getUserById, deleteUserById} from "../models/UserModel.js";
import User from "../models/User.js"

export async function addUser(req, res){
    try {
        const user = new User(req.body.name, req.body.nickname, req.body.password)
        const userId = await user.newUser();
        res.status(201).json({
            id: userId
        });
    } catch (error) {
        const errorInfo = validateErrorMessage(error.message);
        res.status(errorInfo.statusCode).json({
            status: errorInfo.code,
            message: errorInfo.errorMessage,
            details: errorInfo.errorDetails
        });
    }   
}

export async function getUsers(req, res){
    const users = await getAllUsers();
    res.status(200).json(users);
}

export async function getUser(req, res){
    try{
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        const errorInfo = validateErrorMessage(error.message);
        res.status(errorInfo.statusCode).json({
            status: errorInfo.code,
            message: errorInfo.errorMessage,
            details: errorInfo.errorDetails
        });
    }
}

export async function updateUser(req, res){
    try{
        const user = new User(req.body.name, req.body.nickname, req.body.password);
        const userId = await user.updateUser(req.params.id)
        res.status(200).json({
            id: userId
        });
    } catch(error){
        const errorInfo = validateErrorMessage(error.message);
        res.status(errorInfo.statusCode).json({
            status: errorInfo.code,
            message: errorInfo.errorMessage,
            details: errorInfo.errorDetails
        });
    }
}

export async function deleteUser(req, res){
    try{
        await deleteUserById(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(204).json();
    }
}