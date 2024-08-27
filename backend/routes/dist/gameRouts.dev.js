"use strict";

var express = require('express');

var router = express.Router(); // uploading images 

var multer = require('multer');

var storage = require('../server.js');

var upload = multer({
  storage: storage
});

var Game = require('../models/gameModel.js');

var _require = require('../utils.js'),
    isAuth = _require.isAuth; // GET all games


router.get('/', function _callee(req, res) {
  var games;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Game.find());

        case 3:
          games = _context.sent;
          return _context.abrupt("return", res.status(200).json(games));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //GET specific games 

router.post('/', function _callee2(req, res) {
  var fliterGames, specificGames, games;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body, 'ree');
          fliterGames = req.body;
          specificGames = [];
          _context2.next = 5;
          return regeneratorRuntime.awrap(Game.find());

        case 5:
          games = _context2.sent;
          _context2.prev = 6;

          if (!games) {
            _context2.next = 11;
            break;
          }

          games.map(function (game) {
            fliterGames.map(function (searchedGame) {
              if (game.name === searchedGame) {
                specificGames.push(game);
              }
            });
          });
          console.log(specificGames, 'sssp');
          return _context2.abrupt("return", res.status(200).json(specificGames));

        case 11:
          return _context2.abrupt("return", res.status(400).json({
            message: "No Games"
          }));

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](6);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(500).json(_context2.t0));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[6, 14]]);
}); //ADD gmae 

router.post('/', isAuth, upload.single('image'), function _callee3(req, res) {
  var _req$body, name, platform, price, dateOfPurchase, numberOfCopies, remarks, gameCode, existGame, newGame;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          //get data from  the frontend
          _req$body = req.body, name = _req$body.name, platform = _req$body.platform, price = _req$body.price, dateOfPurchase = _req$body.dateOfPurchase, numberOfCopies = _req$body.numberOfCopies, remarks = _req$body.remarks, gameCode = _req$body.gameCode;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Game.findOne({
            name: name
          }));

        case 4:
          existGame = _context3.sent;
          console.log(existGame, 'existGame');

          if (!existGame) {
            _context3.next = 12;
            break;
          }

          numberOfCopies = Math.ceil(numberOfCopies);
          _context3.next = 10;
          return regeneratorRuntime.awrap(Game.updateMany({
            name: name
          }, {
            $set: {
              numberOfCopies: numberOfCopies + existGame.numberOfCopies
            }
          }));

        case 10:
          existGame.save();
          return _context3.abrupt("return", res.status(200).json(existGame));

        case 12:
          newGame = new Game({
            name: name,
            platform: platform,
            image: req.file.path,
            price: price,
            dateOfPurchase: dateOfPurchase,
            numberOfCopies: numberOfCopies,
            remarks: remarks,
            gameCode: gameCode
          });
          console.log(newGame, 'before saving ');
          _context3.next = 16;
          return regeneratorRuntime.awrap(newGame.save());

        case 16:
          console.log('has been saved ');
          return _context3.abrupt("return", res.status(200).json(newGame));

        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(500).json(_context3.t0));

        case 24:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 20]]);
}); //GET game by id

router.get('/:id', function _callee4(req, res) {
  var id, game;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log(req.params.id);
          id = req.params.id;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Game.findById(id));

        case 5:
          game = _context4.sent;

          if (game) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            message: "Game not found"
          }));

        case 8:
          return _context4.abrupt("return", res.status(200).json(game));

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](2);
          console.log(_context4.t0);
          return _context4.abrupt("return", res.status(500).json(_context4.t0));

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 11]]);
}); // Eidt Game 

router.put('/:id', function _callee5(req, res) {
  var _req$body2, name, platform, image, price, dateOfPurchase, numberOfCopies, remarks, gameCode, game;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          //get data from frontend
          _req$body2 = req.body, name = _req$body2.name, platform = _req$body2.platform, image = _req$body2.image, price = _req$body2.price, dateOfPurchase = _req$body2.dateOfPurchase, numberOfCopies = _req$body2.numberOfCopies, remarks = _req$body2.remarks, gameCode = _req$body2.gameCode;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Game.findById({
            _id: req.params.id
          }));

        case 4:
          game = _context5.sent;

          if (game) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(400).json({
            message: "Game not Found"
          }));

        case 7:
          game.name = name, game.platform = platform, game.image = image, game.price = price, game.dateOfPurchase = dateOfPurchase, game.numberOfCopies = numberOfCopies, game.remarks = remarks, game.gameCode = gameCode;
          console.log(game);
          _context5.next = 11;
          return regeneratorRuntime.awrap(game.save());

        case 11:
          return _context5.abrupt("return", res.status(200).json(game));

        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", res.status(500).json(_context5.t0));

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 14]]);
}); // DELETE Game

router["delete"]('/:id', function _callee6(req, res) {
  var game;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log(req.params.id);
          _context6.next = 3;
          return regeneratorRuntime.awrap(Game.findById(req.params.id));

        case 3:
          game = _context6.sent;
          console.log(game);

          if (!game) {
            _context6.next = 12;
            break;
          }

          _context6.next = 8;
          return regeneratorRuntime.awrap(game.deleteOne());

        case 8:
          console.log(game);
          res.json({
            message: "Game has been deleted"
          });
          _context6.next = 13;
          break;

        case 12:
          return _context6.abrupt("return", res.status(400).json({
            message: "Game not found"
          }));

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = router;