var a=22;
var a=32;
a=42;

console.log(a);

let b=32;
// let b=43 ------ can't run
b=423;

console.log(b);


const c=32
// const c=324------ can't run
// c=323 ------- can't run

console.log(c);


function fun(y){
    if(y>5){
        let x= "inside if";
        console.log(x);
        var a= "inside if var";

    }
    else{
        let b="inside else";
        // console.log(a);
        console.log(b);

    }
    console.log(a);
}
fun(7);