// i need to add a way to authnticate the admin only
// and to only show add,editing and deleting gamea to the admin
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

const Admin = require('../models/adminModel.js')
const { isAuth, generateToken } = require('../utils.js')

// const generateToken = (admin) =>{
//     return jwt.sign({id:admin._id},process.env.JWT_SECRET,{
//         expiresIn : '30d'
//     })
// }

// Check if the email is identicaL TO THE OWNER email
//Regeister
router.post('/register',async (req,res)=>{
    const {email , password } = req.body 

    const existAdmin = await Admin.findOne({email:email})
    console.log(email,password)
    console.log(existAdmin) 
    try {
        if ( existAdmin || email !== 'retro-game@giske.nl') {    
            return res.status(404).json({message:'This email is already used or invalid'})
        } 
          // send a password to the email
          const hashedPassword = bcrypt.hashSync(password,10)
            console.log(hashedPassword)
 
            const admin =  new Admin({
                email,
                password: hashedPassword
            })
            await admin.save()
            return res.status(200).json({message:"admin signed Up in successfully"})
        
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

})

// log in
router.post('/login', async (req,res)=>{
    // isAuth()
   
    const {email,password}= req.body
    try {
        const admin = await Admin.findOne({email})
        const comparedpassword= bcrypt.compareSync(password,admin.password)

        console.log(admin.password,password)
        if (admin && comparedpassword ){
            console.log(comparedpassword)
         res.json({
            _id:admin._id,
            name:admin.name,
            email:admin.email,
            password:admin.password,
            token:generateToken(admin._id)
         })
         
        } else {
            res.status(404).json({message:"invalid email or password"})
        }
//   return res.send("t")
    } catch (err) {
        console.log(err)
        res.status(500).json({message:err})
    }
})

//Get admin by id
router.get('/:id',async (req,res)=>{
    console.log(req.params)
try {
    const admin = await Admin.findOne({__dirnameid:req.params.id})
    console.log(admin)
    res.status(200).json(admin)

} catch (err) {
    console.log(err)

    res.status(500).json({message:err})

}
})


module.exports =router