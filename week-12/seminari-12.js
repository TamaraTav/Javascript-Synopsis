// Selection Sort -> O(n^2)

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

