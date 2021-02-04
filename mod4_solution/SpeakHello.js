(function (window){ // OPENING IIFE

var helloSpeaker = {}; // CREATING EMPTY LITERAL

var speakWord = "Hello";

helloSpeaker.speak = function(name){ // SPEAK FUNCTION AS PART OF the helloSpeaker LITERAL
	console.log(speakWord + " " + name);
}
 window.helloSpeaker = helloSpeaker; // COPYING THE CURRENT ghelloSpeaker VALUE TO THE GLOBAL CONTEXT
})(window); // CLOSING IIFE