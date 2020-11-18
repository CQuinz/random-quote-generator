//Get quote and quote author DOM elements
const htmlQuote = document.querySelector("#quote");
const htmlAuthor = document.querySelector("#quote-author");



//Get quote from API

async function getQuote(){
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';


  try {
    const response = await fetch (proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
    let dataQuote = data.quoteText;
    let dataAuthor = data.quoteAuthor;

    htmlQuote.textContent =dataQuote;
    htmlAuthor.textContent = dataAuthor;

    //Count number of characters in quote, if longer than x, change htmlQuote class to long-string

    
    const quoteParent = htmlQuote.parentElement;

    if(dataQuote.length > 30 && quoteParent.classList !=="long-quote"){
      quoteParent.classList.add("long-quote");
      
    }else if(dataQuote.length < 30 && quoteParent.classList ==="long-quote"){
      quoteParent.classList.remove("long-quote");
      
    }
    console.log(dataQuote.length);

  } catch (error) {
    getQuote();
    console.log("whoops, its not working", error);
  }

}

// Listen for new quote button click
const quoteButton = document.querySelector("#new-quote");
quoteButton.addEventListener("click", getQuote);

//Onload
getQuote();