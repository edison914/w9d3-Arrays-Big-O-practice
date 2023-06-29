//array.every()
//time complexity: o(n), loop through all elements.
//space complexity: o(1), not createing addtional data, return one statement true or false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function createArr (max) {
    let arr = [];
    for (let i =0; i < max; i++) {
        arr.push(i)
    }
    return arr;
}

function everyTest(arr, target) {
    let res = arr.every((el) => {
        return el < target
    })
    return res
  }



function everyTest10Timing (increment) {

    for (let n = increment; n <= increment*10; n+= increment) {
        let arr = createArr(n)
        //console.log(arr)
        let startT = Date.now()
        console.log(n)
        everyTest(arr, n)
        console.log(everyTest(arr, n))
        let endT = Date.now()

        console.log(`${endT - startT}ms `);
    }
}

everyTest10Timing(10000000)
