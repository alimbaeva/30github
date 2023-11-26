function notMin(NM, numbersStr, slises) {
    const [N, M] = NM.split(' ').map(Number);
    const arrNumbers = numbersStr.split(' ').map(Number);
    const arrSlises = slises.split(' ').map(Number);
    // const [N, M] = prompt('Введите значения N, M').split(' ').map(Number);
    // const arrNumbers = prompt('Список значений').split(' ').map(Number);
    // const arrSlises = prompt('Введите LR пробелом').split(' ').map(Number);

    for (let i = 0; i < M; i++) {
        const [L, R] = arrSlises.splice(0, 2);
        const sliceNumbers = arrNumbers.slice(L, R + 1);
        const minNum = Math.min(...sliceNumbers);
        const res = sliceNumbers.find((el) => el !== minNum);
        switch(res) {
            case(undefined):
                console.log("NOT FOUND");
                break;
            default:
                console.log(res);
        }
    };
}

notMin('10 5', '1 1 1 2 2 2 3 3 3 10', '0 1 0 3 3 4 7 9 3 7');

// 10 5
// 1 1 1 2 2 2 3 3 3 10
// 0 1 0 3 3 4 7 9 3 7