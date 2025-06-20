use strict";
console.log("Hello World");
console.warn("warning");
console.error("Error");
console.table([{name: "Alice",age:"36"},{name: "Bob",age:"46"}])
eval("let a=5;console.log(\"Hello World!\");console.log(a);")
let x=3.14;
console.log(x);
let obj = {name:"john"};
let str = JSON.stringify(obj);
console.log(str);
let back = JSON.parse(str);
console.log(back);
localStorage.setItem("username","veena");
console.log(localStorage.getItem("username"))
sessionStorage.setItem("firstname","john");
sessionStorage.setItem("age","20");
console.log(sessionStorage.getItem("firstname"));
let promise=new Promise((resolve)=>{
    let condition =true;
    setTimeout(()=>{resolve("hello")}, 10000);
});
promise.then(res=>console.log(res)).catch(err=>console.log(err));

function outer(){
    let name="JS"
    return function inner(){
        console.log(name);
    }
}

//DOM
let dom=document.getElementById("DOM");
let body = document.querySelector("div");

dom.style.color="red";
dom.innerText="Hello World";

let newElement=document.createElement("h1");
newElement.innerText="Veena";
dom.appendChild(newElement);
setTimeout(()=>{
    dom.removeChild(newElement);},1000);
let eleCreate = document.createElement("div");
eleCreate.innerHTML="<h1>Hello World!</h1>"
divclass.appendChild(eleCreate);

//Event listener
let obj=document.getElementById("DOM");
obj.addEventListener("click",()=>{
    let obj1=document.getElementById("head");
    console.log(obj1);
    obj1.innerText="clicked";
});