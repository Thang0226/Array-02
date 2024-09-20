let arr = ["c", "s", "5", "0", "2", "0", "2", "4"];

// document.write(arr.reverse());
let new_arr = [];

document.write(`Array: ${arr.join("")}`);

for (let i = arr.length - 1; i >= 0; i--) {
  new_arr[new_arr.length] = arr[i];
}

document.write(`<br> Reversed Array: ${new_arr.join("")}`);
