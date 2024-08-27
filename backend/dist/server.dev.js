"use strict";

require('dotenv').config();

var express = require('express');

var app = express();
var port = 3000 || process.env.PORT;

var path = require('path');

var multer = require('multer');

var connectDB = require('./config/db.js');

connectDB();

var cors = require('cors');

__dirname = path.resolve();
app.use(cors());
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
app.use('/uploads', express["static"](path.join(__dirname, 'uploads'))); // React QR Barcode Scanner
// routes

app.use('/games', require('./routes/gameRouts.js'));
app.use('/admin', require('./routes/adminRouts.js')); // if (process.env.NODE_ENV === 'production'){
// set static folder

app.use(express["static"](path.resolve("frontend/dist")));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')); // res.sendFile(path.resolve(__dirname, '/app/client/build/index.html'));
  //   res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
}); // } 

app.listen(port, function () {
  {
    console.log("the server is working now in port ".concat(port));
  }
});