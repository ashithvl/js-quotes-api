import {
  getAllQuotes,
  getAllQuotesFromUnknowAuthors,
  getRandomQuote,
  searchQuote,
  searchQuoteByAuthor,
} from "quotes-api";

console.log(getAllQuotes());
console.log(getAllQuotesFromUnknowAuthors());
console.log(getRandomQuote());
console.log(searchQuote("joy"));
console.log(searchQuoteByAuthor("Napoleon"));
