function outerFun(){
    let money = 150;

    function innerFun(){
        money++
        console.log(money)

    }
    return innerFun 
}

fun1= outerFun();
fun2= outerFun();

fun1();
fun1();
fun2();
fun1();
fun2();
fun2();
 
