const fs=require('fs');
// console.log(fs);

console.log("hello 1");

// scnc-->blocking operation
// let result =fs.readFileSync('file.txt',"utf8");
// console.log("hello3");
// console.log(result);
console.log("hello2");

//async-->non-blocking operation
fs.readFile("file.txt","utf8",(error,data)=>{
    if(error){
        throw error;
    }else{
        console.log(data);
        
    }
})
console.log("hello-2");



