const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

//Get quote from API
async function getQuote(){
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {
    const response = await fetch (proxyUrl + apiUrl);
    const data = await response.json();

    // check if author text is empty, if so author.text will read "unknown"
    if(data.quoteAuthor === ""){
      authorText.innerText = "Unknown";
    }else{
      authorText.innerText = data.quoteAuthor;
    }

    
  } catch (error) {
    getQuote();
    console.log("whoops, its not working", error);
  }

}

//Onload
getQuote();