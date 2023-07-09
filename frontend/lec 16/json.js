let data = {
    name : "rishi",
    "age" : 23 ,
    email : "raj2002@gmail.com"
}

let str = JSON.stringify(data);
console.log(str);
 let parse = JSON.parse(str);
 console.log(parse);
