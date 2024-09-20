let arr = prompt("Nhập vào câu văn:").split("");
let count = 0;

// Number of words if number of spaces + 1
for (char of arr) {
  if (char == " ") count++;
}

document.write(`Có tất cả ${count + 1} từ trong câu văn.`);
