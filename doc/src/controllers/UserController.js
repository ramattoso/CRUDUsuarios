import { validateErrorMessage } from "../middleware/ErrorsHandler.js";
import { addNewUser, getAllUsers, getUserById, updateUserById, deleteUserById} from "../models/UserModel.js";

export async function addUser(req, res){
    try {
        const userBodyRequest = {
            name: req.body.name,
            nickname: req.body.nickname,
            password: req.body.password
        }
        const user = await addNewUser(userBodyRequest);
        res.status(201).json(user);
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
        const updateUserBodyRequest = {
            name: req.body.name,
            nickname: req.body.nickname,
            password: req.body.password
        }
        const user = await updateUserById(req.params.id, updateUserBodyRequest);
        res.status(200).json(user);
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