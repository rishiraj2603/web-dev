a= 32
function fun(){
    y=20
    console.log("inside function")
    console.log(y)
    return 0;
}

console.log(fun())
console.log(a)




//------- lexical enviroment 
function b(){
    c();
    var d=322;
    function c(){
        console.log(d);
        return 0;
    }
}
b();
console.log(d);