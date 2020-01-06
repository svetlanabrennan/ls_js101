function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(chr => {
      if (/[a-z]/i.test(chr)) {
        let newChr;
        if (needUpper) {
          newChr = chr.toUpperCase();
        } else {
          newChr = chr.toLowerCase();
        }

        needUpper = !needUpper;
        return newChr;
      } else {
        return chr;
      }
    })
    .join("");
}

console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");