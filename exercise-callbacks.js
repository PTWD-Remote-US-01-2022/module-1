// Write a function study() that receives one argument (string) and outputs (using console.log()) I am studying ____. after 3 seconds (use setTimeout() and pass as a second argument 3000 (which is 3 seconds)).
// Write a second function, chill(), that doesn't receive any arguments and outputs Finished with studying, now chilling..
// Using just gained skills, make sure the second function doesn't execute before the first one.

function study(subject, callback){
    // setTimeout(function(){
      console.log(`I am studying ${subject}.`)
    // }, 3000)
  
    callback();
  }
  
  function chill(){
    console.log("Finished with studying, now chilling.");
  }
  
  // study("css", chill)
  console.log(study("css", chill));
  // console.log(chill())