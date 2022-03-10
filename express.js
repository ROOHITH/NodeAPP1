const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static('./public'))
app.get('/',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'./html/index.html'))
    
})
app.all('*',(req,res)=>{

    res.status(404).send(`resoruce not found`)
})
//app.get
//app.put
//app.delete
//app.post

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});
