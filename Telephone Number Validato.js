function telephoneCheck(str) {
  let regEx =
    /^(1.?\(\d{3}\)|\d{3}|\(\d{3}\)|1\s\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/;
  let result = str.match(regEx);
  console.log(result);
  return regEx.test(str);
}

telephoneCheck("1 (555) 555-5555");
