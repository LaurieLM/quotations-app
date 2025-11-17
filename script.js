const newCitation = document.querySelector("#citations-group");
const citationsBtn = document.querySelector("#citation-btn");

function addQuote(quote, author) {
  const quoteList = document.querySelector("#quote-list");

  const citationText = document.createElement("p");
  citationText.className = "text";
  citationText.textContent = quote;

  const citationAuthor = document.createElement("p");
  citationAuthor.className = "author";
  citationAuthor.textContent = author;
  const citationDiv = document.createElement("div");
  citationDiv.className = "quote";

  quoteList.appendChild(citationDiv);
  citationDiv.appendChild(citationText);
  citationDiv.appendChild(citationAuthor);
}

citationsBtn.addEventListener("click", () => {
  event.preventDefault();
  const citationInput = document.querySelector("#citation-input");
  const authorInput = document.querySelector("#author-input");
  let text = citationInput.value;
  let author = authorInput.value;

  addQuote(text, author);
});
