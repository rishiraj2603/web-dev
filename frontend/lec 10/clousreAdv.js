function outerFun(){
    let money = 150;

    function innerFun(){
        money++;
        let a = 10;

        function InnMostFun(){
            money++;
            a++
            console.log("money:",money,"a:",a)
        }
        return InnMostFun;
    }
    return innerFun ;
}

fun= outerFun();
fun1= fun();
fun2= fun();

fun1();
fun1();
fun2();
fun1();
fun2();
fun2();
 
