export const authorBlock = (quote) => {
  return `<div class="author-block" aria-label="author block" tabindex="0">
    <div class="author-detail">
      <span class="author__name">${quote.quoteAuthor}</span>
      <span class="quote-genre">${quote.quoteGenre}</span>
    </div>

    <span class="material-symbols-outlined">arrow_right_alt</span>
  </div>`;
};

export const autherName = (quote) => `<h1>${quote.quoteAuthor}</h1>`;
