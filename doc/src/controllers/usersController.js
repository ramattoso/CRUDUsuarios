import { ObjectId } from 'mongodb';
import { getAllUsers, addNewUser, addUserPassword, updateUserById, updateUserPassword, getUserByNickname, deleteUserById, updateUserByNickname, deleteUserByNickname } from "../models/usersModel.js";

export async function getUsers(req, res){
    const users = await getAllUsers();
    res.status(200).json(users);
}

export async function getUser(req, res){
    const user = await getUserByNickname(req.params.nickname);
    if (user === null) {
        res.status(404).json('User not found');
    } else { res.status(200).json(user);}
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
    const nameBodyRequest = {
        name: req.body.name,
        nickname: req.body.nickname
    }
    const user = await updateUserByNickname(nameBodyRequest);
    const objectId = user.id;
    const passwordBodyRequest = {
        userId: new ObjectId(objectId),
        password: req.body.password,
    }
    await updateUserPassword(passwordBodyRequest);
    res.status(200).json(user);
}

export async function deleteUser(req, res){
    const user = await deleteUserByNickname(req.params.nickname);
    res.status(204).json();
}