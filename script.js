
let apiQuotes = [];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("quote-author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

//Show new quote
function newQuote(){
  //Pick a random quote for apiQutes array
  const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
  console.log(quote);

// check if author text is empty, if so author.text will read "unknown"
if(quote.author === ""){
  authorText.innerText = "Unknown";
}else{
  authorText.innerText = quote.author;
}

//Reduce font-size of quoteText if num of characters are greater than 120
if(quote.text.length > 120){
  quoteText.classList.add("long-quote");
}else if(quote.text.length < 120){
  quoteText.classList.remove("long-quote");
}
quoteText.innerText = quote.text;

}


//Get quote from API
async function getQuotes(){
  
  const apiUrl = 'https://type.fit/api/quotes';
  
  try {
    const response = await fetch (apiUrl);
    apiQuotes = await response.json();
    newQuote();

    
    
  } catch (error) {
    //Catch error here
    getQuotes();
    console.log("whoops, its not working", error);
  }
}

//Onload
getQuotes();