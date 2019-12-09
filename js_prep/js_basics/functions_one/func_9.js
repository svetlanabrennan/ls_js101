function extractLanguage(langCode) {
  return langCode.split("_")[0];
}


console.log(extractLanguage('en_US.UTF-8'));  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'