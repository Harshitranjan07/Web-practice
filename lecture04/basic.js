const { json } = require("express");

let student={
    name:"sagar gupta",
    age:20,
    address:"domchanch"
};
console.log(student);
console.log(typeof(student));
student=JSON.stringify(student);
console.log(typeof(student));


student=JSON.parse(student);
console.log(typeof(student));



