import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAllUsers(){
    const db = conexao.db("project_pictures_node");
    const users = db.collection("users");
    return users.find().toArray();
}

export async function getUserById(userId){
    const db = conexao.db("project_pictures_node");
    const users = db.collection("users");
    const objId = new ObjectId(ObjectId.createFromHexString(userId));
    return users.findOne({_id: objId});
}

export async function addNewUser(nameBodyRequest){
    const db = conexao.db("project_pictures_node");
    const users = db.collection("users");
    const userId = await users.insertOne(nameBodyRequest);
    return { id:userId.insertedId};
}

export async function addUserPassword(passwordBodyRequest){
    const db = conexao.db("project_pictures_node");
    const password = db.collection("passwords");
    await password.insertOne(passwordBodyRequest);
}

export async function updateUserById(userId,nameBodyRequest){
    const db = conexao.db("project_pictures_node");
    const users = db.collection("users");
    const objId = ObjectId.createFromHexString(userId);
    await users.updateOne({_id: new ObjectId(objId)}, {$set:nameBodyRequest});
    return { id: userId};
}

export async function updateUserPassword(userId,passwordBodyRequest){
    const db = conexao.db("project_pictures_node");
    const password = db.collection("passwords");
    const objId = ObjectId.createFromHexString(userId);
    await password.updateOne({userId: new ObjectId(objId)}, {$set:passwordBodyRequest});
}

export async function deleteUserById(userId){
    const db = conexao.db("project_pictures_node");
    const users = db.collection("users");
    const objId = new ObjectId(ObjectId.createFromHexString(userId));
    return users.deleteOne({_id: objId});
}