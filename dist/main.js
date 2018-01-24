"use strict";

var _nearley = require("nearley");

var _nearley2 = _interopRequireDefault(_nearley);

var _grammar = require("./grammar/grammar");

var _grammar2 = _interopRequireDefault(_grammar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = new _nearley2.default.Parser(_nearley2.default.Grammar.fromCompiled(_grammar2.default));

parser.feed("foo\n");

console.log(parser.results);