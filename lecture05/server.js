const express=require("express");
const app =express();
const port=3000;
// let i=0;

app.use(express.json());
// app.use("/public",express.static("public"))
// app.use("/assets",express.static("public"))

// const fs=require("fs");

// app.use((req,res,next)=>{  //middleware\
//     i++;
//     let data=`incoming request ${ip},${req.ip},${req.url}, timestamp=${new data()}/n`;
//     fs.appendFileSync("long.txt",data,"utf-8")
//     next();
// })





app.get("/",(req,res)=>{
    // console.log("");
    res.send("home page...");
    
})
app.post("/",(req,res)=>{
    console.log(req.body);
    fs.appendFilesync("data.json",JSON.stringify(req.body)+"\n"+req.ip,"utf8")
    res.send("data send succesful")
    
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
    
}) 