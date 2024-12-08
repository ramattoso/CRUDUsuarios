import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
const db = conexao.db("project_pictures_node");
export const users = db.collection("users");
const password = db.collection("passwords");

export async function getAllUsers(){
    return await users.find().toArray();
}

export async function getUserById(userId){
    const objId = new ObjectId(ObjectId.createFromHexString(userId));
    return await users.findOne({_id: objId});
}

export async function getUserByNickname(nickname){
    return await users.findOne({nickname: nickname});
}

export async function addNewUser(nameBodyRequest){
    const userId = await users.insertOne(nameBodyRequest);
    return { id:userId.insertedId};
}

export async function addUserPassword(passwordBodyRequest){
    await password.insertOne(passwordBodyRequest);
}

export async function updateUserById(userId,nameBodyRequest){
    const objId = ObjectId.createFromHexString(userId);
    await users.updateOne({_id: new ObjectId(objId)}, {$set:nameBodyRequest});
    return { id: userId};
}

export async function updateUserByNickname(nameBodyRequest){
    const result = await users.findOne({nickname: nameBodyRequest.nickname});
    users.updateOne({_id: new ObjectId(result._id)}, {$set:nameBodyRequest});
    return { id: result._id};
}

export async function updateUserPassword(passwordBodyRequest){
    const objId = passwordBodyRequest.userId;
    await password.updateOne({userId: new ObjectId(objId)}, {$set:passwordBodyRequest});
}

export async function deleteUserById(userId){
    const objId = new ObjectId(ObjectId.createFromHexString(userId));
    password.deleteOne({userId: objId});
    return await users.deleteOne({_id: objId});
}

export async function deleteUserByNickname(nickname){
    const result = await users.findOne({nickname: nickname});
    password.deleteOne({userId: result._id});
    return await users.deleteOne({_id: result._id});
}