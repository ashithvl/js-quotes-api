import quotesArray from "./data/quotes.js";

const getAllQuotes = () => quotesArray;

// utility to generate a random quote
const quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

/**
 *
 * Returns a random quote
 * By default, (showAuthor: true),
 * Returns Object - a random quote with or without author
 *
 */
const getRandomQuote = (showAuthor = true) => {
  return showAuthor
    ? { quote: quote.text, author: quote.author }
    : { quote: quote.text };
};

/**
 *
 * Returns all quotes from unknown author
 * Returns Array of quotes object
 *
 */
const getAllQuotesFromUnknowAuthors = () =>
  quotesArray
    .filter((quote) => quote.author === null)
    .map((quote) => {
      return { quote: quote.text };
    });

/**
 *
 * Returns all quotes from an author
 * Returns Array of quotes object with quote and author
 *
 */
const searchQuoteByAuthor = (authorName) =>
  quotesArray.filter((quote) =>
    quote.author?.toLocaleLowerCase().includes(authorName.toLocaleLowerCase())
  );

/**
 *
 * Returns all quotes by search term
 * Returns Array of quotes object with quote and author
 *
 */
const searchQuote = (search) =>
  quotesArray.filter((quote) =>
    quote.text?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

export {
  getRandomQuote,
  getAllQuotes,
  getAllQuotesFromUnknowAuthors,
  searchQuoteByAuthor,
  searchQuote,
};
