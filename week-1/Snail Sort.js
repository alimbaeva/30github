snail = function(array) {
    if (array.length === 0) return [];

    const newArr = [];
    let mainLength = array.length;
    let childLength = 0;

    let up = true;
    let down = true;
    let right = true;

    while (mainLength > 0) {
        console.log(mainLength)
        if (right) {
            newArr.push(...array[0]);
            mainLength -= 1;
            right = false;
            down = true;
            array.splice(0, 1);
            continue;
        }else if (down) {
            childLength = array[0].length;
            for (let i = 0; i < array.length; i++) {
                if (array.length - 1 === i) {
                    newArr.push(...array[i].reverse());
                    mainLength -= 1;
                    array.splice(array.length - 1, 1);
                    down = false;
                    up = true;
                    continue;
                }
                newArr.push(array[i][childLength - 1]);
                array[i].splice(childLength - 1, 1);
            }
        }else if (up) {
            for (let i = array.length - 1; i >= 0; i--) {
                if (i === 0) {
                    right = true;
                    up = false;
                    newArr.push(array[i][0]);
                    array[i].splice(0, 1);
                    continue;
                }
                newArr.push(array[i][0]);
                array[i].splice(0, 1);
            }
        }
    }
    return newArr;
}

console.log(snail([[]])) //, []);
console.log(snail([[1]])) //, [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) //, [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([
    [1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10], 
    [11, 12, 13, 14, 15], 
    [16, 17, 18, 19, 20], 
    [21, 22, 23, 24, 25]])) 
        //, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]););
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])) 
        //, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
console.log();