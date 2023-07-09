'use strict'

var arr = [1, 3, 4, true, false, true, "this is also an array"]

console.log(arr);
var b = 29
b = 30;
console.log(b)
for ( var i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}

// //for of loop
// for(let item of arr){
//     console.log(item);
// }

console.log("before", arr)


arr.push(12);
arr.push(1322);
arr.push(1234);
arr.push(1211);
arr.push(1267);

arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();

arr.shift();
arr.shift();

arr.unshift(23);
arr.unshift(23);
arr.unshift(23);

console.log("after", arr)


var arr1 = [1, 3, 5, 2, 4, 5, 6, 9, 7]

arr1.splice(4, 2)
console.log("after", arr1)
arr1.splice(2, 3, 5)
console.log("after", arr1)
arr1.splice(3, 0, 12)
console.log("after", arr1)