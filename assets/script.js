var adviceContainer = document.querySelector('#advice');
var funFactContainer = document.querySelector('#randomFact-container');
var quotationContainer = document.querySelector("#quotationContainer")
var adviceUrl = "https://api.adviceslip.com/advice"
var funFactUrl = "https://api.aakhilv.me/fun/facts"
var quoteGardenUrl = "https://quote-garden.herokuapp.com/api/v3/quotes?per_page=1&limit=10"

fetch(quoteGardenUrl).then(function(response) {
  response.json().then(function(data) {
    console.log(data);

    var famousQuote= document.createElement('div');
    for (var i=0; i < data.data.length; i++ ){
      var random = Math.floor(Math.random() * data.data.length);

      var quote =  data.data[random].quoteText;
      console.log(quote);
      break;
    }
    famousQuote.innerHTML ="<q>"+ quote +"</q>"

    quotationContainer.appendChild(famousQuote);
  });
});

fetch(funFactUrl).then(function(response) {
  response.json().then(function(data) {
    console.log(data);
    var funFact= document.createElement('h4');
    funFact.textContent = data;

    funFactContainer.appendChild(funFact);
  });
});

   // make a request to the URL 
   fetch(adviceUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data.slip.advice);

      var advicePiece = document.createElement('h4');

      advicePiece.textContent = data.slip.advice;

      adviceContainer.appendChild(advicePiece);


    });
  });