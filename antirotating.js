let arr = [1, 2, 3, 4, 5];
let d = 2;

for (let i = 0; i < d; i++) {
 
  let first = arr[0];

  
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }

  
  arr[arr.length - 1] = first;
}

console.log(arr);
