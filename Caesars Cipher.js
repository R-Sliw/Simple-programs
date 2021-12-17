function rot13(str) {
  let decodedCode = "";

  for (let i = 0; i < str.length; i++) {
    let letterCode = str.charCodeAt(i);

    if (letterCode < 78) {
      if (letterCode < 64) {
        letterCode -= 13;
      }
      decodedCode += String.fromCharCode(letterCode + 13);
    } else {
      decodedCode += String.fromCharCode(letterCode - 13);
    }
  }

  return decodedCode;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT!?"));
