const array1 = [3, 2, 1, 13, 8, 5, 0, 1]

const array2 = [105, 79, 100, 110]



function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.ceil(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  const array = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array.push(left[i]);
      i++;
    } else {
      array.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    array.push(left[i]);
    i++;
  }

  while (j < right.length) {
    array.push(right[j]);
    j++;
  }

  return array;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

