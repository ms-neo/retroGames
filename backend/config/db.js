const mongoose = require('mongoose')

const connectDB = async () =>{
 
    try {
        console.log('conn',process.env.DB_URI)
       await mongoose.connect(process.env.DB_URI)
       console.log('connected to mongodb')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB