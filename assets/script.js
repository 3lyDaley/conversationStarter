
// variables for all the parent containers in index.HTML
var adviceContainer = document.querySelector('#advice');
var funFactContainer = document.querySelector('#randomFact-container');
var quotationContainer = document.querySelector("#quotationContainer");
var gifContainer = document.querySelector('#gifContainer');
var tdihContainer = document.querySelector('#TDIH-Container');

// modal variables 
var adviceModal = document.querySelector('#adviceModal');
var adviceModalBody = document.querySelector('#adviceModalBody');
var tdihModal = document.querySelector('#tdih-Modal');
var tdihModalBody = document.querySelector('#tdih-ModalBody');

var duration = 5000;
// variables for each API
var adviceUrl = "https://api.adviceslip.com/advice";
var funFactUrl = "https://api.aakhilv.me/fun/facts";
var quoteGardenUrl = "https://quote-garden.herokuapp.com/api/v3/quotes?per_page=1&limit=10";
var historyUrl = "http://history.muffinlabs.com/date";


  
$('#thisDayBtn').on("click", function(e) {
    
    fetch(historyUrl).then(function(response){
      response.json().then(function(data){
        
        
        // variables to hold length of each set of arrays
        var eventsLength = data.data.Events.length;
        var deathLength = data.data.Deaths.length;
        var birthLength = data.data.Births.length;
        
        
        // for loops for each category, structured to recieve a random array selection on every refresh
        // events category
        for(var i = 0; i < 217; i++){
          var numEvent = Math.floor(Math.random() * eventsLength);
          
          var thisDayEvent = data.data.Events[numEvent].text;
          var thisDayEventYear = data.data.Events[numEvent].year;
          
          
          // Deaths category (so and so died on this day)
          var numDeath = Math.floor(Math.random() * deathLength);
          
          var thisDayDeath= data.data.Deaths[numDeath].text;
          var thisDayDeathYear = data.data.Deaths[numDeath].year;
          
          
          //birth category
          var numBirth = Math.floor(Math.random() * birthLength);
          var thisDayBirth= data.data.Births[numBirth].text;
          var thisDayBirthYear = data.data.Births[numBirth].year;
          break;
        }  
          
          // HTML and append to div container hardcoded in index.HTML
          // div container to hold data fetched in for loops
          


        $( "<p><b> An event of varying signifigance:</b> " + thisDayEvent + " ( " + thisDayEventYear + ") </br><b>" + 
        thisDayBirth + "</b> was born on this day in <b>" + thisDayBirthYear + ". </b></br><b> " 
        + thisDayDeath + "</b> died on this day in <b>" + thisDayDeathYear + ".</b></p>").appendTo($('.thisDayHere'));
        $('.thisDayHere').show();
          
          $("#thisDayBtn").on('click', function(e){
            $('.thisDayHere').hide();
            $(".thisDayHere").html('');
          }); 
          
        
          
          
          
           
      });
    });
  });
  
  
  var getQuotation = function() {
    
    fetch(quoteGardenUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
        
        // gets random Quote from list and appends to parent Div
        var famousQuote= document.createElement('div');
        for (var i=0; i < data.data.length; i++ ){
          // to generate a random number 
          var random = Math.floor(Math.random() * data.data.length);
          
          var quote =  data.data[random].quoteText;
          var author = data.data[random].quoteAuthor;
          famousQuote.innerHTML ="<q>"+ quote +"</q></br><h4> -" + author + "</h4>"
          quotationContainer.appendChild(famousQuote);
          
          // only need this loop to run one time
          break;
        }
        
      });
    });
  }
  
  var getFunFact = function() {
    
    fetch(funFactUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data)
       
       var funFact = data
        $('<p>' + funFact + '</p>').appendTo($('.funFactHere'));
        $('.funFactHere').show();
          
          $("#randomfact-container").on('click', function(e){
            $('.funFactHere').hide();
            $(".funFactHere").html('');
          }); 
          

      
      });
    });
  }
  
  $('#adviceBtn').on("click", function(e) {
    
    fetch(adviceUrl).then(function(response) {
      response.json().then(function(data) {
        
        // dont need random number for this data (already randomized)
        var advice = data.slip.advice;
        
       
        $('<p>' + advice + '</p>').appendTo($('.adviceHere'));
        $('.adviceHere').show();
          
          $("#advice").on('click', function(e){
            $('.adviceHere').hide();
            $(".adviceHere").html('');
          }); 
          
        });
      });
  });     
        
            

       
        
        // $('<p>' + advice + '</p>').appendTo($('.adviceHere'));
        // $("#adviceBtn").on("click", function(e){
        //   $('.adviceHere').show();
        // })

        
        // $('.advice').on("click", function(e){
        //   $('.adviceHere').html("");
        //   console.log('clicked');
        // });


  

    
  
  
    
   
    
    

