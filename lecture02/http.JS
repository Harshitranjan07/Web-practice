const http=require("http");
let server=http.createServer((req,res)=>{
    console.log(res);
    res.end("mirai page sent");
    
});
server.listen(3000);