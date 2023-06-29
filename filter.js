//array.filter()
//time complexity: o(n), loop through the array
//space complexity: o(n), if creating and return new array. there are case it can be less of original array. but worst case is return n elements in the array.

function createArr (max) {
    let arr = [];
    for (let i =0; i < max; i++) {
        arr.push(i)
    }
    return arr;
}

function filterTest(arr, target) {
    let res = arr.filter((el) => {
        return el === target
    })
    return res
  }



function filterTest10Timing (increment) {

    for (let n = increment; n <= increment*10; n+= increment) {
        
        let arr = createArr(n)
        let startT = Date.now()
        filterTest(arr, n)
        let endT = Date.now()

        console.log(`${endT - startT}ms `);
    }
}

filterTest10Timing(1000000)
