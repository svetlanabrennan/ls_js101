function extractLanguage(langCode) {
  return langCode.split("_")[0];
}

function extractRegion(langCode) {
  return langCode.split(".")[0].split("_")[1];
}

function greet(langCode) {
  switch (langCode) {
    case "en" : return "Hi!";
    case "fr" : return "Salut!";
    case "pt" : return "Ola!";
    case "de" : return "Hallo!";
    case "sv" : return "Hej!";
    case "af" : return "Haai!";
  }
} 

function localGreet(langCode) {
  let lang = extractLanguage(langCode);
  let region = extractRegion(langCode);

  switch (region) {
    case "US" : return "Hey!";
    case "GB" : return "Hello!";
    case "AU" : return "Howdy!";
    default: return greet(langCode);
  }
}


console.log(localGreet('en_US.UTF-8'));// 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'