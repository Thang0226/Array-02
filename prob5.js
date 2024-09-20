let arr1 = prompt("Enter first string:").split("");
let arr2 = prompt("Enter second string:").split("");

let same = true;

if (arr1.length != arr2.length) {
  same = false;
} else {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) same = false;
    break;
  }
}

if (same) {
  alert("Two strings are the same");
} else {
  alert("Two strings are different");
}
