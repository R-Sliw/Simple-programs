function palindrome(str) {
  let bigLetters = str
    .toUpperCase()
    .replace(/[^a-zA-Z1-9]/g, "");

  let reverseWord = bigLetters
    .split("")
    .reverse()
    .join("");

  return (bigLetters === reverseWord) ? true : false;
}
palindrome("race car");
