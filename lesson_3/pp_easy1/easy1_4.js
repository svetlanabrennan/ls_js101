let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription = munstersDescription.slice(0,1).toUpperCase() + 
munstersDescription.slice(1).toLowerCase(); // my solution

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase(); // course solution