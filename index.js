const { readFileSync } = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(readFileSync('./index.html'));
        res.end("hello");
    }
})
server.listen(5000);