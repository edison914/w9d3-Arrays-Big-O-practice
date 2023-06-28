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

let n = 2000000;
let startT = Date.now()
pushTest(n);
let endT = Date.now()
console.log(`${endT - startT}ms `);

//time complexity: o(n)
//space complexity: o(1)

//n = 100000, 5ms
//n = 200000, 10ms
//n = 500000, 15ms
//n = 750000, 20ms
//n = 1000000, 26ms
//n = 1500000, 37ms
//n = 2000000, 64ms
