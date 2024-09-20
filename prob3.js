let arr = prompt("Nhập vào chuỗi các ký tự:").split("");
let count = 0;
// change elements in array to number, or NaN if that character is not a number
num_arr = arr.map((string) => +string);

// count++ if an element is not NaN
for (let i = 0; i < num_arr.length; i++) {
  if (!isNaN(num_arr[i])) {
    count++;
  }
}

document.write(`Trong chuỗi ký tự có ${count} ký tự là số.`);
