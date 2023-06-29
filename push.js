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

let n = 100000;
let startT = Date.now()
pushTest(n);
let endT = Date.now()
console.log(`${endT - startT}ms `);

//pushTest(n)
//time complexity: o(n)
//space complexity: o(n)

//arr.push()
//time complexity: o(1)
//space complexity: o(1)

//n = 100000, 3ms
//n = 200000, 3ms
//n = 500000, 6ms
//n = 750000, 8ms
//n = 1000000, 10ms
//n = 1500000, 15ms
//n = 2000000, 19ms
//n = 3000000, 37ms
//n = 4000000, 37ms
//n = 8000000, 71ms
//n = 10000000, 95ms
