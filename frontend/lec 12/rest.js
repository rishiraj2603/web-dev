function add(a,b, ...c){
    console.log(a);
    console.log(b);
    console.log(c);

    let k = c.reduce((total,num)=>{
        return total+num
    },0)

    return a+b+k
}

let addition = add(1,2,3,4,4,5,7,7,8);
console.log(addition);