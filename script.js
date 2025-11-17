const citationGroup = document.querySelector("#citations-group");
const citationsBtn = document.querySelector("#citation-btn");

let citation = [
  {
    author: "Simone de Beauvoir",
    text: "On ne naît pas femme, on le devient.",
  },
];

let quoteCount = 0;

let citationStorage = localStorage.getItem("citations");
if (citationStorage !== null) {
  citation = JSON.parse(citationStorage);
} else {
  console.log("Aucune donnée trouvée dans le localStorage.");
}

citation.forEach((element) => {
  displayQuote(element.text, element.author);
});

function displayQuote(quote, author) {
  const quoteList = document.querySelector("#quote-list");
  const count = document.getElementById("count");

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

  quoteCount += 1;
  count.innerText = quoteCount;
}

function addQuote(quote, author) {
  let newCitation = {
    text: quote,
    author: author,
  };
  citation.push(newCitation);

  localStorage.setItem("citations", JSON.stringify(citation));
  displayQuote(quote, author);
  console.log(citation);
}

citationGroup.addEventListener("submit", (event) => {
  event.preventDefault();
  const citationInput = document.querySelector("#citation-input");
  const authorInput = document.querySelector("#author-input");
  let text = citationInput.value;
  let author = authorInput.value;

  addQuote(text, author);
});
