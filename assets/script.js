var adviceContainer = document.querySelector('#advice');
var funFactContainer = document.querySelector('#randomFact-container');
var quotationContainer = document.querySelector("#quotationContainer")
var quoteArr=[];
var adviceUrl = "https://api.adviceslip.com/advice"
var funFactUrl = "https://api.aakhilv.me/fun/facts"
var quoteGardenUrl = "https://quote-garden.herokuapp.com/api/v3/quotes?per_page=1&limit=20"

fetch(quoteGardenUrl).then(function(response) {
  response.json().then(function(data) {
    console.log(data);
    var famousQuote= document.createElement('div');
    for (var i=0; i < 3; i++ ){

      var quote =  data[i].quoteText;
      quoteArr.push(quote);
      console.log(quoteArr);
    }
    // famousQuote.innerHTML ="<q>"+ quote +"</q>"

    // quotationContainer.appendChild(famousQuote);
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