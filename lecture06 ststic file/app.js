const express = require("express");
const app = express();
const fs = require("fs");

const port = 3000;

app.use((req,res,next)=>{
    // console.log("params:",req);
    console.log(req.query);
    next();
    
    
})

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("home route page");
});

app.post("/register", (req, res) => {
    console.log(req.body);

    fs.appendFileSync("data.json", JSON.stringify(req.body) + "\n" + req.ip + "\n", "utf8" );
    res.send("register complete..");
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});