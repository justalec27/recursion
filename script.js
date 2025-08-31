

function fibs (n){
    const array = [];
    let num = 0

    for (let i = 0; i < (n); i++) {
    if (i < 2){
         num = i
    } else {
        num = array[i-1] + array[i-2]
    }
    array.push(num);
    }

    
    return array
}

console.log(fibs(8))


function fibsRec (n) {
    console.log("This was printed recursively");
    if (n === 1 ) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    } else {
        let array = fibsRec (n-1)
        let result = array[array.length - 1] + array[array.length - 2];
        array.push(result)
        return array
    }
}

console.log(fibsRec(8))