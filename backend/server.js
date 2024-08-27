require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const path =require('path')
const multer = require('multer')
const connectDB = require('./config/db.js')
connectDB()
const cors =require('cors')

__dirname = path.resolve()

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


 const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
 module.exports =storage

  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// React QR Barcode Scanner

// routes
app.use('/games',require('./routes/gameRouts.js'))
app.use('/admin',require('./routes/adminRouts.js'))



  // if (process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static(path.resolve("frontend/dist")));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend','dist','index.html'));
        // res.sendFile(path.resolve(__dirname, '/app/client/build/index.html'));
            //   res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
    // } 
app.listen(port,()=>{{
    console.log(`the server is working now in port ${port}`)
}})