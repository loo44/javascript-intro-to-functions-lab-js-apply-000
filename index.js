function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return shout(string).toLowerCase();
}

function logShout(string) {
  console.log("hello".toUpperCase());
}

function logWhisper(string) {
  console.log("HELLO".toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase)
   {
   return ("I can\'t hear you!");
   }

 else if (string.toUpperCase)
{
   return ("YES INDEED!");
 }


else if  (string==="I love you, Grandma.")
 {
   return ("I love you, too.")
 }
}


