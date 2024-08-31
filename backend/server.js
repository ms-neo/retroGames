require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const path =require('path')
const multer = require('multer')
const connectDB = require('./config/db.js')
connectDB()
const cors =require('cors')

// __dirname = path.resolve()

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


 const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
 module.exports =storage

  app.use('/uploads', express.static('uploads'));
  // app.use('/uploads', express.static(__dirname + '/uploads'));

// React QR Barcode Scanner

// routes
app.use('/api/games',require('./routes/gameRouts.js'))
app.use('/api/admin',require('./routes/adminRouts.js'))

console.log(process.env.NODE_ENV,'nn')

  // if (process.env.NODE_ENV === 'production'){

  const __dirname = path.resolve()
    // set static folder
    app.use(express.static(path.join("frontend/dist")));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend','dist','index.html'));
        // res.sendFile(path.resolve(__dirname, '/app/client/build/index.html'));
            //   res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
    // } else{
      // app.get('/',(req,res)=> res.send('server is ready'))
    // }

app.listen(port,()=>{{
    console.log(`the server is working now in port ${port}`)
}})