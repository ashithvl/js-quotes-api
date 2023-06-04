"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchQuoteByAuthor = exports.searchQuote = exports.getRandomQuote = exports.getAllQuotesFromUnknowAuthors = exports.getAllQuotes = void 0;
var _quotes = _interopRequireDefault(require("./data/quotes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var getAllQuotes = function getAllQuotes() {
  return _quotes["default"];
};

// utility to generate a random quote
exports.getAllQuotes = getAllQuotes;
var quote = _quotes["default"][Math.floor(Math.random() * _quotes["default"].length)];

/**
 *
 * Returns a random quote
 * By default, (showAuthor: true),
 * Returns Object - a random quote with or without author
 *
 */
var getRandomQuote = function getRandomQuote() {
  var showAuthor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return showAuthor ? {
    quote: quote.text,
    author: quote.author
  } : {
    quote: quote.text
  };
};

/**
 *
 * Returns all quotes from unknown author
 * Returns Array of quotes object
 *
 */
exports.getRandomQuote = getRandomQuote;
var getAllQuotesFromUnknowAuthors = function getAllQuotesFromUnknowAuthors() {
  return _quotes["default"].filter(function (quote) {
    return quote.author === null;
  }).map(function (quote) {
    return {
      quote: quote.text
    };
  });
};

/**
 *
 * Returns all quotes from an author
 * Returns Array of quotes object with quote and author
 *
 */
exports.getAllQuotesFromUnknowAuthors = getAllQuotesFromUnknowAuthors;
var searchQuoteByAuthor = function searchQuoteByAuthor(authorName) {
  return _quotes["default"].filter(function (quote) {
    var _quote$author;
    return (_quote$author = quote.author) === null || _quote$author === void 0 ? void 0 : _quote$author.toLocaleLowerCase().includes(authorName.toLocaleLowerCase());
  });
};

/**
 *
 * Returns all quotes by search term
 * Returns Array of quotes object with quote and author
 *
 */
exports.searchQuoteByAuthor = searchQuoteByAuthor;
var searchQuote = function searchQuote(search) {
  return _quotes["default"].filter(function (quote) {
    var _quote$text;
    return (_quote$text = quote.text) === null || _quote$text === void 0 ? void 0 : _quote$text.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });
};
exports.searchQuote = searchQuote;