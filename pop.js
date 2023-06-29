//array.pop()
//time complexity: o(1), removing one element. no looping.
//space complexity: o(1), removing one element. not creating new array.

//popTest(arr)
//time complexity: o(n^2).
//space complexity: o(1).

function randomNumberArr(max) {
    const res = new Array();

    for (let i = 0; i < max; i++) {
      const randomNumber = Math.floor(Math.random() * Math.floor(max));

      res.push(randomNumber);
    }

    return res;
  }


let arr = randomNumberArr(10000);
let arr10 = randomNumberArr(10000*10);

function popTest(arr) {
    const n = arr.length;

    for (let i = 0 ; i < n ; i++) {

      arr.pop();
    }

    return arr;
  }

function popTest10 (arr10) {
    const n = arr.length
    for (let i = 0 ; i < n ; i++) {

        arr10.pop();
    }

    return arr;
}

  let startT = Date.now()
  popTest(arr);
  let endT = Date.now()
  console.log(`${endT - startT}ms `);

//size: 100000, 2ms
//size: 500000, 2ms
//size: 1000000, 3ms
//size: 5000000, 13ms
//size: 10000000, 26ms
//size: 20000000, 49ms
//size: 50000000, 124ms
