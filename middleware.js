const middleware =(req,res,next)=>{
        const {user}= req.query;
        const u = req.query;
        console.log(u.user);
    if(user === "roh"){
        console.log("middleware1")
        next();
    }
    else{
        res.status(401).send("not authoized");
    }
    
}
module.exports = middleware