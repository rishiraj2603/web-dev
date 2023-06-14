// ------------- implicit

// let obj = {
//     num: 323   ,
//     str:'this is string' ,
//     fun:function(){
//         this.age = 40
//         console.log(this)
//     }
// }

// obj.fun();

// ------- explicit
let student1 = {
    name:'abx',
    age:23,
    rollNo:01
}
let student2 = {
    name:'asadx',
    age:233,
    rollNo:04
}

function update( age, name){
    this.age = age;
    this.name = name;
}

update.apply(student1,[23,'sunfji'])
update.apply(student2,[2343,'sacnfji'])

console.log(student1);
console.log(student2);


//  update.call(student1,12,'ssaf')
//  update.call(student2,123,'ssafdedasf')


// ------- constructor funtion

function Student(name, age , rollNo){
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
}

let student3 = new Student('sdfsa',32 ,001);
let student4 = new Student('sefs',3232 ,0013);
let student5 = new Student('sdfs242fdca',4532 ,00321);
 
console.log(student3);
console.log(student4);
console.log(student5);
console.log(typeof student3);
