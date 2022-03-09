const { readFileSync } = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(readFileSync('./html/index.html'))
        res.end();
    }
    else if(req.url==="/css/index.css"){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(readFileSync('./css/index.css'))
        res.end();
    }
    else if(req.url==="/about"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(readFileSync('./html/about.html'))
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>not founf</h1>')
        res.end()
    }
})
server.listen(5000);