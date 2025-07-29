function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];  //დროებითი temporary ცვლადი
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// Time Complexity: O(n^2) ანუ რამდენი ელემენტიცაა მასივში, იმის კვადრატი ბიჯი გვჭირდება
console.log(bubbleSort([5, 3, 8, 2, 1, 4]));


// let a = 5;
// let b = 3;

// [b, a] = [a, b];  ასეთი დესტრუქტურიზაციითაც შეიძლება ადგილების გაცვლა
// console.log(a, b); // 3, 3