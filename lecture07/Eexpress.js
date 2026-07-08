const express = require("express");
const app = express();

app.set("view engine","ejs");

//file ,uske dta ko retrive kiya
let prince={
    name:"sagar mirai",
    age:20,
    dist:"koderma",
}

app.get("/",(req,res)=>{
    res.send("home page..")
})

app.get("/user",(req,res)=>{
    res.render("user",{prince});
})


app.listen(3000, () => {
    console.log(`server is running at port no 3000`);
});

