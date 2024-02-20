function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      // Последние i элементов уже отсортированы, поэтому их можно игнорировать
      for (let j = 0; j < n - i - 1; j++) {
        // Сравниваем пары соседних элементов и меняем их, если порядок неверный
        if (arr[j] > arr[j + 1]) {
          // Обмен значений
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  // Пример использования
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray.slice());
  console.log(sortedArray);
  