const jwt = require('jsonwebtoken')

const generateToken = (admin) =>{
    console.log(process.env.JWT_SECRET,'JWT_SECRET')
    return jwt.sign(
        {id:admin._id},
        process.env.JWT_SECRET,
        {
        expiresIn : '30d'
    })
}

const isAuth = (req,res,next) =>{

    //get token from header 
    const token = req.headers.authorization
  
    //check if there is a token
    if (!token){
        return res.status(401).json({
            Message:"no token, Autheization denied"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.admin= decoded
        next()
    } catch (err) {
        console.log(err)
        res.status(401).json({
            message: "Invalied Token"
        })
    }
}

module.exports ={
    generateToken:generateToken,
    isAuth:isAuth
}