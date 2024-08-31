const express = require('express')
const router = express.Router()

// uploading images 
const multer = require('multer');
const storage = require('../server.js')
const upload = multer( {storage} )

const Game = require('../models/gameModel.js');
const { isAuth } = require('../utils.js');


// GET all games
router.get('/', async (req,res)=>{
    // console.log(req.headers. authorization)
    // isAuth()
    try {
        const games=  await Game.find();
        // console.log(games,'gettt');
        return res.status(200).json(games)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//GET specific games 
router.post('/', async (req,res)=>{
    console.log(req.body,'ree')
  const fliterGames = req.body
  let specificGames = [];

  const games = await Game.find();
    try {
        if (games){
    games.map(game => {
    fliterGames.map(searchedGame =>{
            if (game.name === searchedGame){
                specificGames.push(game)
            }
        })
    })
    console.log(specificGames,'sssp')
        return res.status(200).json(specificGames)
}
   return res.status(400).json({message:"No Games"})
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//ADD gmae 
router.post('/' ,isAuth  ,upload.single('image') , async (req,res)=>{

    try {
          //get data from  the frontend
    let {
        name,
        platform,
        price,
        dateOfPurchase,
        numberOfCopies,
        remarks,
        gameCode } = req.body 

    
      let existGame = await Game.findOne({name})
      console.log(existGame,'existGame')

    if (existGame ){
       numberOfCopies=Math.ceil(numberOfCopies)
       await Game.updateMany({name:name},{
        $set:{numberOfCopies :numberOfCopies + existGame.numberOfCopies}
       })
     existGame.save()
     return res.status(200).json(existGame)
    }  

        let newGame = new Game({
            name:name,
            platform:platform,
            image:req.file.path,
            price: price,
            dateOfPurchase,
            numberOfCopies ,
            remarks,
            gameCode
        })
        
        console.log(newGame,'before saving ')
        await newGame.save()
        console.log('has been saved ')
  
    return res.status(200).json(newGame)
    

    } catch (err) {
        console.log(err)
   return  res.status(500).json(err)
    }
  
})

//GET game by id
router.get('/:id', async (req,res)=>{
    console.log(req.params.id)
    const id = req.params.id
    try {
        const game = await Game.findById(id)
        if (!game){
        return res.status(400).json({message:"Game not found"});
        }
        return res.status(200).json(game);
    } catch (err) {
        console.log(err)
        return  res.status(500).json(err)
    }
})

// Eidt Game 
router.put('/:id',isAuth, async (req,res)=>{

    try {
           //get data from frontend
           let {
            name,
            platform,
            image,
            price,
            dateOfPurchase,
            numberOfCopies,
            remarks,
            gameCode } = req.body 

            const game = await Game.findById({_id:req.params.id})
            if (!game){
             return res.status(400).json({message:"Game not Found"})
            }
    
            game.name =name,
            game.platform = platform,
            game.image =  image,
            game.price =  price,
            game.dateOfPurchase =  dateOfPurchase,
            game.numberOfCopies =  numberOfCopies ,
            game.remarks =  remarks,
            game.gameCode =  gameCode

            console.log(game)
            await game.save()
           return res.status(200).json(game)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
       
})

// DELETE Game
router.delete('/:id', async (req ,res)=>{
    console.log(req.params.id)
    
       let game = await Game.findById(req.params.id)
       console.log(game)
       if (game){
       await game.deleteOne()
       
       console.log(game)
         res.json({message:"Game has been deleted"})
       }else {
        return res.status(400).json({message:"Game not found"})
       }
})





module.exports = router