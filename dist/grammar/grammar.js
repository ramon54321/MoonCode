"use strict";

// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
   function id(x) {
      return x[0];
   }
   var grammar = {
      Lexer: undefined,
      ParserRules: [{ "name": "MAIN$ebnf$1$subexpression$1", "symbols": ["STATEMENT", { "literal": "\n" }] }, { "name": "MAIN$ebnf$1", "symbols": ["MAIN$ebnf$1$subexpression$1"] }, { "name": "MAIN$ebnf$1$subexpression$2", "symbols": ["STATEMENT", { "literal": "\n" }] }, { "name": "MAIN$ebnf$1", "symbols": ["MAIN$ebnf$1", "MAIN$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {
            return d[0].concat([d[1]]);
         } }, { "name": "MAIN", "symbols": ["MAIN$ebnf$1"] }, { "name": "STATEMENT$string$1", "symbols": [{ "literal": "f" }, { "literal": "o" }, { "literal": "o" }], "postprocess": function joiner(d) {
            return d.join('');
         } }, { "name": "STATEMENT", "symbols": ["STATEMENT$string$1"] }, { "name": "STATEMENT$string$2", "symbols": [{ "literal": "b" }, { "literal": "a" }, { "literal": "r" }], "postprocess": function joiner(d) {
            return d.join('');
         } }, { "name": "STATEMENT", "symbols": ["STATEMENT$string$2"] }],
      ParserStart: "MAIN"
   };
   if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = grammar;
   } else {
      window.grammar = grammar;
   }
})();