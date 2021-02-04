(function (window){ // OPENING IIFE

var byeSpeaker = {} // CREATING EMPTY LITERAL

var speakWord = "Good Bye";

byeSpeaker.speak = function(name){// SPEAK FUNCTION AS PART OF the byeSpeaker LITERAL
  console.log(speakWord + " " + name);	
}

window.byeSpeaker = byeSpeaker; // COPYING THE CURRENT gvyeSpeaker VALUE TO THE GLOBAL CONTEXT
})(window); // CLOSING IIFE