import { addUserService, deleteUserService, getUserService, getUsersService, updateUserService } from "../services/UserService.js";

export async function addUser(req, res){
    return addUserService(req, res);
}

export async function getUsers(req, res){
    return getUsersService(req, res);
}

export async function getUser(req, res){
    return getUserService(req,res)
}

export async function updateUser(req, res){
    return updateUserService(req, res);
}

export async function deleteUser(req, res){
    return deleteUserService(req, res)
}