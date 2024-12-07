import { ObjectId } from 'mongodb';
import { getAllUsers, addNewUser, addUserPassword, updateUserById, updateUserPassword, getUserByNickname, deleteUserById } from "../models/usersModel.js";

export async function getUsers(req, res){
    const users = await getAllUsers();
    res.status(200).json(users);
}

export async function getUser(req, res){
    const user = await getUserByNickname(req.params.nickname);
    res.status(200).json(user);
}

export async function addUser(req, res){
    const nameBodyRequest = {
        name: req.body.name,
        nickname: req.body.nickname
    }
    const user = await addNewUser(nameBodyRequest);
    const passwordBodyRequest = {
        userId: user.id,
        password: req.body.password
    }
    await addUserPassword(passwordBodyRequest);
    res.status(201).json(user);
}

export async function updateUser(req, res){
    const userId = req.params.id;
    const nameBodyRequest = {
        name: req.body.name,
    }
    const user = await updateUserById(userId,nameBodyRequest);
    const objectId = ObjectId.createFromHexString(userId);
    const passwordBodyRequest = {
        userId: new ObjectId(objectId),
        password: req.body.password,
    }
    await updateUserPassword(userId,passwordBodyRequest);
    res.status(200).json(user);
}

export async function deleteUser(req, res){
    const user = await deleteUserById(req.params.id);
    res.status(204).json();
}