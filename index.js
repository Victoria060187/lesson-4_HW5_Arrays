const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumPositiveElements = 0;
let countPositiveElements = 0;
let maxElement = numbers[0];
let maxSequenceNum = 0;
let countNegativeElements = 0;
let countOddPositiveElements = 0;
let countEvenPositiveElements = 0;
let sumEvenPositiveElements = 0;
let sumOddPositiveElements = 0;
let productPositiveElements = 1;

for (let i = 0; i < numbers.length; i++) {
  const currentNum = numbers[i];

  if (currentNum > 0) {
    sumPositiveElements += currentNum;
    countPositiveElements++;
    productPositiveElements *= currentNum;

    if (currentNum > maxElement) {
      maxElement = currentNum;
      maxSequenceNum = i;
    }

    if (currentNum % 2 === 0) {
      countEvenPositiveElements++;
      sumEvenPositiveElements += currentNum;
    } else {
      countOddPositiveElements++;
      sumOddPositiveElements += currentNum;
    }
  } else {
    countNegativeElements++;
  }
}

const result =
  'Sum of positive elements: ' + sumPositiveElements + '\n' +
  'The number of positive elements: ' + countPositiveElements + '\n' +
  'The maximum element of the array: ' + maxElement + '\n' +
  'Sequence number of the maximum element: ' + maxSequenceNum + '\n' +
  'The number of negative elements: ' + countNegativeElements + '\n' +
  'The number of odd positive elements: ' + countOddPositiveElements + '\n' +
  'The number of even positive elements: ' + countEvenPositiveElements + '\n' +
  'Sum of even positive elements: ' + sumEvenPositiveElements + '\n' +
  'Sum of odd positive elements: ' + sumOddPositiveElements + '\n' +
  'Product of positive elements: ' + productPositiveElements;

alert(result);