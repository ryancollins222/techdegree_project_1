/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: "We are all self-made, but only the successful will admit it.",
    source: "Earl Nightingale",
  },
  {
    quote: "The Dude abides.",
    source: "The Dude",
    citation: "The Big Lebowski",
    tag: "movie quotes"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "I’m going to make him an offer he can’t refuse",
    source: "Don Corleone",
    citation: "The Godfather",
    year: 1972,
    tag: "movie quotes"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    source: "Ralph Waldo Emerson"
  },
];

// calculates random index num to return quote 
function getRandomQuote() {
  let randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

// random color
function randColor() {
  let color = Math.floor(Math.random() * 256);
  return color;
}

// prints quote, source to page. citation and year if available
function printQuote() {
  let randQuote = getRandomQuote();
  let rgbColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`
  let quoteString = `
    <p class="quote"> ${randQuote.quote} </p>
    <p class="source"> ${randQuote.source}
  `
  if (randQuote.citation) {
    quoteString += `<span class="citation">${randQuote.citation}</span>`
  } 
  if (randQuote.year) {
    quoteString += `<span class="year"> ${randQuote.year}</span>`
  }
  if (randQuote.tag) {
    quoteString += `<span class="tag">, ${randQuote.tag}</span>`
  }
  quoteString += `</p>`
  document.getElementById('quote-box').innerHTML = quoteString;
  document.body.style.backgroundColor = rgbColor;
} 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);