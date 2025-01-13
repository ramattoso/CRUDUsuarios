import { validateErrorMessage } from "../middleware/ErrorsHandler.js";
import User from "../models/User.js"
import { UserRepository } from "../repositories/UserRepository.js";

export async function addUserService(req, res){
    try {
        const userRepository = new UserRepository;
        const user = new User(req.body.name, req.body.nickname, req.body.password)
        const userId = await userRepository.createUser(user);
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

export async function getUsersService(req, res){
    try{
        const userRepository = new UserRepository;
        const users = await userRepository.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        const errorInfo = validateErrorMessage(error.message);
        res.status(errorInfo.statusCode).json({
            status: errorInfo.code,
            message: errorInfo.errorMessage,
            details: errorInfo.errorDetails
        });
    }
}

export async function getUserService(req, res){
    try{
        const userRepository = new UserRepository;
        const user = await userRepository.getUserById(req.params.id);
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

export async function updateUserService(req, res){
    try{
        const userRepository = new UserRepository;
        const user = new User(req.body.name, req.body.nickname, req.body.password);
        const userId = await userRepository.updateUser(user,req.params.id)
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

export async function deleteUserService(req, res){
    try{
        const userRepository = new UserRepository;
        await userRepository.deleteUserById(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(204).json();
    }
}