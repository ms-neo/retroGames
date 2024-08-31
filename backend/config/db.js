const mongoose = require('mongoose')

const connectDB = async () =>{
 
    try {
        console.log('conn',process.env.DB_URI)
       await mongoose.connect(`mongodb+srv://${process.env.DB_URI}@db.a1thqsb.mongodb.net/retro-games?retryWrites=true&w=majority&appName=db
       production`,{
        useUnifiedTopology: true,

        useNewUrlParser: true,
       })
       console.log('connected to mongodb')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB