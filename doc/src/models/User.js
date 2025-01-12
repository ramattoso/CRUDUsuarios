import { UserRepository} from "../repositories/UserRepository.js";

class User {
    constructor (name, nickname, password){
        this.name = name,
        this.nickname = nickname,
        this.password = password;
        this.repository = new UserRepository;
    }

    async newUser() {
        return this.repository.createUser(this);
    }

    async updateUser(userId) {
        return this.repository.updateUser(this, userId)
    }
}

export default User;