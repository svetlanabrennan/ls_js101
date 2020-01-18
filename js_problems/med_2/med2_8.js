let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
'we can not hallow this ground. The brave men, living and dead, who ' +
'struggled here, have consecrated it, far above our poor power to add ' +
'or detract. The world will little note, nor long remember what we say ' +
'here but it can never forget what they did here. It is for us the ' +
'living, rather, to be dedicated here to the unfinished work which ' +
'they who fought here have thus far so nobly advanced. It is rather ' +
'for us to be here dedicated to the great task remaining before us -- ' +
'that from these honored dead we take increased devotion to that ' +
'cause for which they gave the last full measure of devotion -- that ' +
'we here highly resolve that these dead shall not have died in vain ' +
'-- that this nation, under God, shall have a new birth of freedom -- ' +
'and that government of the people, by the people, for the people, ' +
'shall not perish from the earth.';



function longestSentence(string) {
  array = string.match(/\w.*?[.!?]/g); // split and turned into array using regex

  let result = {};
  let longest;

  array.forEach((sentence, index) => { // split each sentence and find the length of it
    let length = sentence.split(" ").length;
      return result[length] = sentence // move result of length and the full sentence to object
  });


  longest = Object.keys(result); // accessed keys of object
  longest.reduce((a, b) => { // find the largest length
    return longest = (Math.max(Number(a), Number(b)))
  })

  console.log(result[longest]) // print longest sentence
  console.log(`The longest sentence has ${longest} words!`) // print length of largest sentence
};

longestSentence(longText);
longestSentence(longerText);
longestSentence("Where do you think you're going? What's up, Doc?");
longestSentence("To be or not to be! Is that the question?");
