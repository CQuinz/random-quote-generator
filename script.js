let apiQuotes = [];

//Show new quote
function newQuote(){
  //Pick a random quote for apiQutes array
  const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
  console.log(quote);
}

//Get quote from API
async function getQuotes(){
  
  const apiUrl = 'https://type.fit/api/quotes';
  
  try {
    const response = await fetch (apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes[89]);
    newQuote();
    
  } catch (error) {
    //Catch error here
    getQuotes();
    console.log("whoops, its not working", error);
  }
}

  



//Onload
getQuotes();