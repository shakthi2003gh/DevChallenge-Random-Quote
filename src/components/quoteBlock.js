export const quoteBlock = (quote) =>
  `<blockquote id="${quote._id}" class="quote-block">${quote.quoteText}</blockquote>`;

export const quotesBlock = (quotes, author) =>
  quotes.filter((quote) => quote.quoteAuthor === author).map(quoteBlock);
