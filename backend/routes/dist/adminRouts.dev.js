"use strict";

// i need to add a way to authnticate the admin only
// and to only show add,editing and deleting gamea to the admin
var express = require('express');

var router = express.Router();

var bcrypt = require('bcrypt'); // const jwt = require('jsonwebtoken')


var Admin = require('../models/adminModel.js');

var _require = require('../utils.js'),
    isAuth = _require.isAuth,
    generateToken = _require.generateToken; // const generateToken = (admin) =>{
//     return jwt.sign({id:admin._id},process.env.JWT_SECRET,{
//         expiresIn : '30d'
//     })
// }
// Check if the email is identicaL TO THE OWNER email
//Regeister


router.post('/register', function _callee(req, res) {
  var _req$body, email, password, existAdmin, hashedPassword, admin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.next = 3;
          return regeneratorRuntime.awrap(Admin.findOne({
            email: email
          }));

        case 3:
          existAdmin = _context.sent;
          console.log(email, password);
          console.log(existAdmin);
          _context.prev = 6;

          if (!(existAdmin || email !== 'retro-game@giske.nl')) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            message: 'This email is already used or invalid'
          }));

        case 9:
          // send a password to the email
          hashedPassword = bcrypt.hashSync(password, 10);
          console.log(hashedPassword);
          admin = new Admin({
            email: email,
            password: hashedPassword
          });
          _context.next = 14;
          return regeneratorRuntime.awrap(admin.save());

        case 14:
          return _context.abrupt("return", res.status(200).json({
            message: "admin signed Up in successfully"
          }));

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](6);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 17]]);
}); // log in

router.post('/login', function _callee2(req, res) {
  var _req$body2, email, password, admin, comparedpassword;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // isAuth()
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Admin.findOne({
            email: email
          }));

        case 4:
          admin = _context2.sent;
          comparedpassword = bcrypt.compareSync(password, admin.password);
          console.log(admin.password, password);

          if (admin && comparedpassword) {
            console.log(comparedpassword);
            res.json({
              _id: admin._id,
              name: admin.name,
              email: admin.email,
              password: admin.password,
              token: generateToken(admin._id)
            });
          } else {
            res.status(404).json({
              message: "invalid email or password"
            });
          } //   return res.send("t")


          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          res.status(500).json({
            message: _context2.t0
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
}); //Get admin by id

router.get('/:id', function _callee3(req, res) {
  var admin;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.params);
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Admin.findOne({
            __dirnameid: req.params.id
          }));

        case 4:
          admin = _context3.sent;
          console.log(admin);
          res.status(200).json(admin);
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
          res.status(500).json({
            message: _context3.t0
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 9]]);
});
module.exports = router;