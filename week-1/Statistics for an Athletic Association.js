function stat(strg) {
    const arr = strg.split(',');
    const res = [];
    const arrSum = [];
    for (let i = 0; i < arr.length; i++) {
        const numbers = arr[i].split('|');
        arrSum.push((Number(numbers[0]) * 60 * 60) + (Number(numbers[1]) * 60) + Number(numbers[2]));
    }
 
    const maxNumber = Math.max(...arrSum);
    const minNumber = Math.min(...arrSum);

    const range = maxNumber - minNumber;
    const average = arrSum.reduce((curr, el) => curr + el) / arrSum.length;
    let median = 0

    const sortedNumbers = arrSum.slice().sort((a, b) => a - b);
    if (sortedNumbers.length % 2 === 0 ) {
        const n1 = sortedNumbers[sortedNumbers.length / 2];
        const n2 = sortedNumbers[sortedNumbers.length / 2 - 1];
        median = (n1 + n2) / 2;
    } else {
        median = sortedNumbers[Math.floor(sortedNumbers.length / 2)];
    }

    res.push(range);
    res.push(average);
    res.push(median);

    const result = [];

    res.map((el) => {
        const rangeH = String(Math.floor(el / 3600)).padStart(2, '0');
        const rangeM = String(Math.floor((el % 3600) / 60)).padStart(2, '0');
        const ranges = String(Math.floor(el % 60)).padStart(2, '0');

        result.push(`${rangeH}|${rangeM}|${ranges}`);
    })
    
    return `Range: ${result[0]} Average: ${result[1]} Median: ${result[2]}`
}

// stat("01|15|59, 1|47|16") //  "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")) //  "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"
// stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41") // "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"