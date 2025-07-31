// Selection Sort -> O(n^2)
/*
function selectionSort(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i; // უმცირესი რიცხვის ინდექსი
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([10, 22, 34, 19, 17])); // [10, 17, 19, 22, 34]
*/



// Quick Sort -> O(n log n)  ეს ბევრად სწრაფია!!!!!!!!!!!
//ვიყენებ რეკურსიას

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; //ჩავსფრედავ
}

console.log(quickSort([3, -3, 5, 2, 6, 8, -6, 1, 9]));


