
let apiQuotes = [];

//Show new quote
function newQuote(){
  //Pick a random quote for apiQutes array
  const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
  console.log(quote);
}

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


//Get quote from API
async function getQuotes(){
  
  const apiUrl = 'https://type.fit/api/quotes';
  
  try {
    const response = await fetch (apiUrl);
    apiQuotes = await response.json();
    newQuote();

    // check if author text is empty, if so author.text will read "unknown"
    if(quote.author === ""){
      authorText.innerText = "Unknown";
    }else{
      authorText.innerText = quote.author;
    }
    
  } catch (error) {
    //Catch error here
    getQuotes();
    console.log("whoops, its not working", error);
  }
}

//Onload
getQuotes();