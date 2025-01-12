import { UserRepository } from "../repositories/UserRepository.js";

class User {
    constructor (name, nickname, password){
        this.name = name,
        this.nickname = nickname,
        this.password = password;
        this.repository = new UserRepository;
    }
}

export default User;