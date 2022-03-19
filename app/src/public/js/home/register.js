"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name")
const password = document.querySelector("#psword");
const confirmPassword = document.querySelector("#confirm-psword");
const registerBt = document.querySelector("#button");

registerBt.addEventListener("click", register);

function register(){
    if(!id.value)   return alert("아이디를 입력하시오.");
    if(password.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    
    const req = {
       id: id.value,
       name: name.value,
       password: password.value,
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