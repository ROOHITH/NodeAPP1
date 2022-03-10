const express = require('express');
const path  = require('path');
const middleware = require('./middleware')
const middleware1 = require('./authorizeMiddleware');
const {people}= require('./data')
const app = express();
const PORT = 5000;
app.use(express.static('./public'))
app.use(express.urlencoded({extended:false}))
app.use('/about',[middleware,middleware1])


app.get('/',(req,res)=>{
    console.log("response ")
    //res.status(200).sendFile(path.resolve(__dirname,'./html/index.html'));
    res.sendFile(path.resolve(__dirname,'./html/index.html'))
  //  res.send("home")

})



app.get('/about',(req,res)=>{
    //console.log("response ")
    res.send("about")

})

app.post('/login',(req,res)=>{

        //req.query
        res.send(req.body)
})


app.all('*',(req,res)=>{
    req.status(404).send(`resourse not found`)
})

app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`)
})