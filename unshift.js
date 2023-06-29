//array.shift()
//time complexity: o(n), adding one element. all other element nees to be shifted right one index.
//space complexity: o(n), add one element. not creating new array but all existing element need to be shifted. ????

//unshiftTest()
//time o(n^2);
//space o(n);

function unshiftTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
      arr.unshift(i);
    }

    return arr;
  }

function unshiftTest10(increment) {

for (let i = increment; i <= increment*10; i+= increment) {

    let startT = Date.now()
    unshiftTest(i);
    let endT = Date.now()

    console.log(`${endT - startT}ms `)
}

}

let n = 10000;
unshiftTest10(n);
