const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");
const tweetBtn = document.getElementById("tweetBtn");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();

  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(api_url);

quoteBtn.addEventListener("click", () => {
  getQuote(api_url);
});

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "--- by " +
      author.innerHTML
  );
}

tweetBtn.addEventListener("click", () => {
  tweet();
});
