const mongoose = require('mongoose')

const gameSchema  =  mongoose.Schema({
   name :{
        type:String,
        required:true,
    },
    platform:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    dateOfPurchase:{
        type:String,
        required:true,
    },
    numberOfCopies:{
        type:Number,
        required:true,
    },
    remarks:{
        type:String,
    },
    gameCode: {
        type: String,
        required: true
    }
}, 
    {
        timestamps: true, // This will add createdAt and updatedAt fields
      }
)

const Game = mongoose.model("Game",gameSchema)
module.exports = Game