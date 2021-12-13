function convertToRoman(num) {
  let roman = "";

  while (1000 <= num) {
    if (num >= 1000) {
      roman += "M";
      num -= 1000;
    }
  }

  while (900 <= num) {
    if (num >= 900) {
      roman += "CM";
      num -= 900;
    }
  }

  while (500 <= num && num < 900) {
    if (num >= 500) {
      roman += "D";
      num -= 500;
    }
  }

  while (400 <= num && num < 500) {
    if (num >= 400) {
      roman += "CD";
      num -= 400;
    }
  }

  while (100 <= num && num < 400) {
    if (num >= 100) {
      roman += "C";
      num -= 100;
    }
  }

  while (90 <= num && num < 100) {
    if (num >= 90) {
      roman += "XC";
      num -= 90;
    }
  }

  while (50 <= num && num < 90) {
    if (num >= 50) {
      roman += "L";
      num -= 50;
    }
  }

  while (40 <= num && num < 50) {
    if (num >= 40) {
      roman += "XL";
      num -= 40;
    }
  }

  while (30 <= num && num < 40) {
    if (num >= 30) {
      roman += "XXX";
      num -= 30;
    }
  }

  while (20 <= num && num < 30) {
    if (num >= 20) {
      roman += "XX";
      num -= 20;
    }
  }

  while (10 <= num && num < 20) {
    if (num >= 10) {
      roman += "X";
      num -= 10;
    }
  }

  while (9 <= num && num < 10) {
    if (num >= 9) {
      roman += "IX";
      num -= 9;
    }
  }

  while (5 <= num && num < 9) {
    if (num >= 5) {
      roman += "V";
      num -= 5;
    }
  }

  while (4 <= num && num < 5) {
    if (num >= 4) {
      roman += "IV";
      num -= 4;
    }
  }

  while (1 <= num && num < 4) {
    if (num >= 1) {
      roman += "I";
      num -= 1;
    }
  }

  return roman;
}

console.log(convertToRoman(4));
