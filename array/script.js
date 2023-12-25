
var arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java"]

// let newArray = [...new Set(arr)];

// console.log(newArray);

let newArray = arr => arr.filter((el, i)=> arr.indexOf(el) === i);
console.log(newArray(arr));

// var deleteArr = ["php", "css", "script", "html"]


// function removeDuplicates(arr) {
// const newArr= [];
// for (var i = 0; i < arr.length; i++) {
//     // if (deleteArr.includes(arr[i])) {
//     //     arr.splice(i, 1);
//     // }
//     const arr2 = i % 2 === 0
// }

// }

// console.log(removeDuplicates())