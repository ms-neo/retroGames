"use strict";

require('dotenv').config();

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
console.log(process.env.PORT, 'port');

var path = require('path');

var multer = require('multer');

var connectDB = require('./config/db.js');

connectDB();

var cors = require('cors');

__dirname = path.resolve(); // __dirname = path.resolve()

app.use(cors({
  credentials: true,
  origin: true
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function filename(req, file, cb) {
    cb(null, "".concat(Date.now(), "-").concat(file.originalname));
  }
});
module.exports = storage;
app.use('/uploads', express["static"]('uploads')); // app.use('/uploads', express.static(__dirname + '/uploads'));
// React QR Barcode Scanner
// routes

app.use('/api/games', require('./routes/gameRouts.js'));
app.use('/api/admin', require('./routes/adminRouts.js'));
console.log(process.env.NODE_ENV, 'nn'); // if (process.env.NODE_ENV === 'production'){
// set static folder

app.use(express["static"](path.join("frontend/dist")));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html')); // res.sendFile(path.resolve(__dirname, '/app/client/build/index.html'));
  //   res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
}); // } else{
// app.get('/',(req,res)=> res.send('server is ready'))
// }

app.listen(port, function () {
  {
    console.log("the server is working now in port ".concat(port));
  }
});