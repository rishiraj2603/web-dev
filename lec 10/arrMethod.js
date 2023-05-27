let arr = [1,23,32,4,5,6,6,7,8,9,2]

let data =[ 
    {
        name:'iphone',
        price:200
    } ,{
        name:'macBook',
        price:100
    } ,{
        name:'apple',
        price:20
    } ,{
        name:'phone',
        price:2
    } 
]

// ----------- map 
// let num= arr.map((num,ind)=>{
//     return num*2;
// })

// ---------- map
// let num= data.map((item,ind)=>{
//     return '<li>${item.price}</li>'
// })

// -------------- filter
// let num = data.filter((num,ind)=>{
//     return num.price > 10;
// })

// ------------ reduce
// let num = arr.reduce((total, num ,ind)=>{
//     return 
// })

//------------ for each loop
// arr.forEach((val, ind, arr)=>{
//     console.log(val, ind);
// });


let Arr = [1,23,32,4,5]
let Arr2 = ['ak','arr','rew','dfsa']

let sortArr = Arr.sort((a,b)=>{
    // return a-b; ----- accending order
    // return b-a ---for decending order
})

let sortedArr = Arr2.sort();
console.log(sortedArr);
console.log(sortedArr.reverse());

