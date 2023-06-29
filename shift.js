//array.shift()
//time complexity: o(n), removing one element. all other element nees to be shifted down one index.
//space complexity: o(n), removing one element. not creating new array but all existing element need to be shifted.????



function shiftTest(arr) {
    const n = arr.length;

    for (let i = 0 ; i < n ; i++) {
      arr.shift();
    }

    return arr;
  }

function shiftTest10 (increment) {
    for (let i = increment; i<= 10*increment; i+=increment) {
        let arr =[];
        for(let j = 0; j < i; j++) {
            arr.push(j);
        }

        let startT = Date.now()
        shiftTest(arr)
        let endT = Date.now()


        console.log(`${endT - startT}ms `);
    }
}

shiftTest10(10000);

//time o(n)
//space o(n)


//10000, 1ms
//50000, 199ms
//100000, 802ms
//500000, 21925ms
