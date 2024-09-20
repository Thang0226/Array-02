let arr = prompt("Nhập vào chuỗi các ký tự cho mảng:").split("");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "-") arr[i] = "_";
}

alert(`Mảng ký tự sau khi thay thế dấu (-): ${arr}`);
