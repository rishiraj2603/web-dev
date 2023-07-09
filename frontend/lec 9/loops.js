var arr = [32,444,2,3,4,3,23,4,2,32,4,2];
//-------- normal loop
// for (var i=0; arr<arr.length;i++){
//     console.log(arr[i]);
// }

//----------- for of loop (array)

// for (var item of arr){
//     console.log(item);
// }

//---------- for in loop for object 

var person = {
    names: "abc",
    'full name': "ab dasfc",
    age : 23 ,
    isAdult : true ,
    marks : [32,4,4,323,44,21]
}

for(var key in person){
    console.log(person[key]);
}

//---------- for each next time


