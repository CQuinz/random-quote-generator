
let apiQuotes = [];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("quote-author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");


// Show loader
const loading = () =>{
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Complete
const complete = () =>{
  loader.hidden = true;
  quoteContainer.hidden = false;
}

//Show new quote
function newQuote(){
  //Pick a random quote for apiQutes array
  const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
  

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

//Tweet quote
const tweetQuote = () =>{
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  //Open tweet in a new tab
  window.open(twitterUrl, '_blank');
}


// Add event listeners for buttons
newQuoteBtn.addEventListener("click", getQuotes);
twitterBtn.addEventListener("click", tweetQuote);

//Onload
// getQuotes();
loading();