/**
 * 
Для решения этой задачи, 
где требуется найти индексы двух чисел в отсортированном массиве, 
сумма которых равна заданной цели, можно использовать подход с двумя указателями. 
Вот пример реализации на JavaScript:
 */

function findTwoSumIndices(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const currentSum = sortedArray[left] + sortedArray[right];

    if (currentSum === target) {
      // Найдена пара суммирующихся элементов
      return [left, right];
    } else if (currentSum < target) {
      // Увеличиваем сумму, двигая левый указатель вправо
      left++;
    } else {
      // Уменьшаем сумму, двигая правый указатель влево
      right--;
    }
  }

  // Если нет пары, возвращаем null
  return null;
}

// Пример использования
const sortedArray = [-2, 1, 2, 4, 7, 11];
const targetSum = 13;

const resultIndices = findTwoSumIndices(sortedArray, targetSum);

if (resultIndices !== null) {
  console.log(`Индексы двух чисел, сумма которых равна ${targetSum}: ${resultIndices}`);
} else {
  console.log(`В массиве нет двух чисел, сумма которых равна ${targetSum}.`);
}
  