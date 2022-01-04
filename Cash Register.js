function checkCashRegister(price, cash, cid) {
  let rest = cash - price;
  const myCash = cid.map((coin) => coin[1]).reduce((a, b) => a + b);
  const coin = cid.map((coin) => coin[1]);
  const cashName = cid.map((coin) => coin[0]);
  const status = ["OPEN", "CLOSED", "INSUFFICIENT_FUNDS"];

  let arrey = [];
  let change = {
    status,
    change: arrey,
  };

  if (myCash > rest) {
    change.status = status[0];
  } else if (myCash === rest) {
    change.status = status[1];
  } else {
    change.status = status[2];
  }

  if (myCash > rest) {
    if (rest >= 100) {
      let num = 0;
      while (rest >= 100) {
        rest = rest - 100;
        num++;
      }
      arrey.push(num * 100);
    }

    if (rest >= 20) {
      let num = 0;
      while (coin[7] >= 20) {
        coin[7] = coin[7] - 20;
        rest -= coin[7];
        num++;
      }
      arrey.push([cashName[7], num * 20]);
    }
    rest.toFixed(2);

    if (rest >= 10) {
      let num = 0;
      while (rest >= coin[6]) {
        rest = rest - 10;
        num++;
      }
      arrey.push([cashName[6], num * 10]);
    }
    if (rest >= 5) {
      let num = 0;
      while (rest >= 5) {
        rest = rest - 5;
        num++;
      }

      arrey.push([cashName[5], num * 5]);
    }

    if (rest >= 1) {
      let num = 0;
      while (rest >= 1) {
        rest = rest - 1;
        num++;
      }
      arrey.push([cashName[4], num * 1]);
    }

    if (rest >= 0.25 && coin[3] != 0) {
      let num = 0;
      while (rest >= 0.25) {
        rest = rest - 0.25;
        num++;
      }
      arrey.push([cashName[3], num * 0.25]);
    }

    if (rest >= 0.1 && coin[2] != 0) {
      let num = 0;
      while (rest >= 0.1) {
        rest = rest - 0.1;
        num++;
      }
      arrey.push([cashName[2], num * 0.1]);
    }

    if (rest >= 0.05 && coin[1] != 0) {
      let num = 0;
      while (rest >= 0.05) {
        rest = rest - 0.05;
        num++;
      }
      arrey.push([cashName[1], num * 0.05]);
    }

    if (rest >= 0.01 && coin[3] != 0) {
      let num = 0;
      while (rest >= 0.0) {
        rest = rest - 0.01;
        num++;
      }
      arrey.push([cashName[0], num * 0.01]);
    }
  } else if (myCash == rest) {
    arrey.push(...cid);
  } else {
    arrey = [];
  }

  if (arrey.length == 0) {
    change.status = status[2];
  }

  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
