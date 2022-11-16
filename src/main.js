import { quoteBlock, quotesBlock } from "./components/quoteBlock";
import { autherName, authorBlock } from "./components/authorBlock";
import { randomButton } from "./components/randomButton";
import "/src/style.css";

let index = 0;
const quotes = [
  {
    _id: 1,
    quoteAuthor: "Bill Gates",
    quoteGenre: "business",
    quoteText: `“The first rule of any technology used in a business is that automation applied to
              an efficient operation will magnify the efficiency. The second is that automation 
              applied to an inefficient operation will magnify the inefficiency.”`,
  },
];

const getQuote = () => {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
    .then((res) => res.json())
    .then((data) => quotes.push(...data.data));
};

function render(index, viewMore = false) {
  const homeSection = `<div class="home-section">
  ${randomButton()} 
  ${quoteBlock(quotes[index])}
  ${authorBlock(quotes[index])}
  </div>`;

  const viewMoreSection = `<div class="view-more-section">
  ${randomButton()} 
  ${autherName(quotes[index])}
  ${quotesBlock(quotes, quotes[index].quoteAuthor)}
  </div>`;

  document.querySelector("#app").innerHTML = viewMore
    ? viewMoreSection
    : homeSection;

  if (!viewMore) {
    const viewMoreBtn = document.querySelector(".author-block");
    viewMoreBtn.removeEventListener("click", showViewMore);
    viewMoreBtn.addEventListener("click", showViewMore);
  }

  const randomBtn = document.querySelector("button");
  randomBtn.removeEventListener("click", getRandomQuote);
  randomBtn.addEventListener("click", getRandomQuote);
}

function getRandomQuote() {
  index = Math.floor(Math.random() * 11);
  render(index);
}

function showViewMore() {
  render(index, true);
}

getQuote();
render(index);
