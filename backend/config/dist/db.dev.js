"use strict";

var mongoose = require('mongoose');

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('conn', process.env.DB_URI);
          _context.next = 4;
          return regeneratorRuntime.awrap(mongoose.connect("mongodb+srv://".concat(process.env.DB_URI, "@db.a1thqsb.mongodb.net/retro-games?retryWrites=true&w=majority&appName=db\n       production"), {
            useUnifiedTopology: true,
            useNewUrlParser: true
          }));

        case 4:
          console.log('connected to mongodb');
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = connectDB;