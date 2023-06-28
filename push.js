function randomNumberArr(max) {
    const res = new Array();

    for (let i = 0; i < max; i++) {
      const randomNumber = Math.floor(Math.random() * Math.floor(max));

      res.push(randomNumber);
    }

    return res;
  }


let arrlength = randomNumberArr(10).length;

function pushTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr;
}

let n = 100;
let startT = Date.now()
pushTest(n);
let endT = Date.now()
console.log(`${endT - startT}ms `);
