const Adminjwt = require("jsonwebtoken");
require('dotenv').config() 
module.exports= function (req:any,res:any,next:any){
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.sendStatus(401)
    }
    try{
        const ACCESS_TOKEN_SECRET:string = "AdminAccessKey"
        const decoded=Adminjwt.verify(token,ACCESS_TOKEN_SECRET);
        
        
        req.user=decoded;
        console.log(req.user.email);
        console.log(req.user.id);
        
        next();
    }
    catch(ex){
        res.status(401).send("Sorry! only admin has access.");
    }
    
}