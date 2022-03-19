"user strict";

class UserStorage {
    static #users={ //은닉화
        id: ["lsh7569", "lsh75690", "asdf"],
        password: ["1234", "1234", "123123"],
        name:["이성혁", "이성혁", "김팀장"],
    };

    static getUsers(...fields){//은닉화 변수를 메서드로 보내기위함
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
    }
}

module.exports = UserStorage;
