"use strict";

const users={
    id: ["lsh7569", "lsh75690", "asdf"],
    password: ["1234", "1234", "123123"],
};

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
       const id=req.body.id,
        password=req.body.password;

       if(users.id.includes(id)){ //DB에 받아온 id가 있으면
           const idx = users.id.indexOf(id);
           if(users.password[idx]===password){
               return res.json({
                   success: true,
               });
           }
       }

       return res.json({
           success: false,
           msg: "로그인에 실패하셨습니다.",
       });
    },
};

module.exports = {
    output,
    process,
};