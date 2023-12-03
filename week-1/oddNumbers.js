function getCountOfOddNumbers(number) {
    let count = 0;
    for (let i = 0; i <= Math.abs(number); i += 1) {
      if (i % 2 !== 0) {
        count += 1;
      }
    }
  
    return count;
  }

console.log(getCountOfOddNumbers(4)) //  => 2
console.log(getCountOfOddNumbers(5)) //  => 3
console.log(getCountOfOddNumbers(10)) // => 5
console.log(getCountOfOddNumbers(15)) // => 8
console.log(getCountOfOddNumbers(-4)) //  => 2
console.log(getCountOfOddNumbers(-5)) //  => 3
console.log(getCountOfOddNumbers(-10)) // => 5
console.log(getCountOfOddNumbers(-15)) // => 8