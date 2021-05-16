import { quotes } from "./quotesDataSet.js";

document.querySelector(".gen-btn").addEventListener("click", generateQuotes);

function generateQuotes() {
  let rand = 0;
  for (let i = 0; i < quotes.length; i++) {
    rand = Math.trunc(Math.random() * quotes.length);
  }
  document.querySelector(".quote").innerHTML = `"${quotes[rand].quote}"`;
  document.querySelector(".author").innerHTML = `-${quotes[rand].author}`;
}
