const express = require("express");
const app = express();

let student = {
    name: "sagar kumar",
    age: 20,
    college: "mirai"
};

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/aktu/result/:year/:roll",(req,res)=>{
    console.log(req.param);
    if(req.param.roll>50){
        req.send("pass")
    }else{
        req.send("fail")
    }

    //db search start
    //result aagya
    // res.send("fail ho gya")
    
})

app.get("regis",(req,res)=>{
    console.log(req.query);
    //query db me serch ki jaygiu
    //result ayega
    //rimender kiya jayega
    res.send("your data found and render...")
})

app.get("/user", (req, res) => {
    console.log("inside /user route..");

    res.render("user", { student });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});