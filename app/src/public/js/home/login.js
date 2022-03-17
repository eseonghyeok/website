"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#psword");
const loginBt = document.querySelector("button");

loginBt.addEventListener("click", login);

function login(){
    const req = {
       id: id.value,
       password: password.value,
    };
    
   
    fetch("/login",{
        mothod: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    });
}