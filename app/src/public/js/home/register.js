"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name")
const password = document.querySelector("#psword");
const confirmPassword = document.querySelector("#confirm-psword");
const loginBt = document.querySelector("#button");

loginBt.addEventListener("click", register);

function register(){
    const req = {
       id: id.value,
       name: name.value,
       password: password.value,
       confirmPassword: confirmPassword.value,
    };
    
   
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
             location.href = "/login";
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.log(new Error("register error"));
    });
}