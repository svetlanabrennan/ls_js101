function searchWord(word, string) { // using includes
  let count = 0;
  string.split(" ").forEach(value => {
    if (value.toLowerCase().includes(word)) {
      count += 1;
    }
  });
  return count;
}

function searchWord(word, string) { // using match
 let regex = new RegExp(word, "gi");
 let match = string.match(regex)
 return match ? match.length : 0;
}

function searchWord(word, string) { // using match looking for whole words: further explorations
  if (word.length === 0 || string.length === 0) {
    return "Error. Empty word and/or string"
  }

  let regex = new RegExp(`\\b${word}\\b`,"gi");
  let match = string.match(regex)
  return match ? match.length : 0;
 }

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));
console.log(searchWord('', text));