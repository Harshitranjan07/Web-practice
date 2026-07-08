// import { request } from "node:http";

const http = require("http");

let server = http.createServer((req, res) => {
    console.log("Hi inside server..computer");
    
    res.end("Facebook page sent");
    
});

server.listen(3000);
    

