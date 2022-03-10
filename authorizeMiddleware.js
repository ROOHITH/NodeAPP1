const authorizeMiddleWare = (req,res,next)=>{
    console.log('authorizeMidllewqare');
    
    next()
}
module.exports = authorizeMiddleWare;