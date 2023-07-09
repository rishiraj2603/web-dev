const data =[{l:4,b:3}, {l:3,b:7},{l:3,b:7},{l:3,b:7}];

const area = (l,b) => l*b ;
const perimeter = (l,b) => 2*(l+b) ;

function calculate (data, logic){

    let result = [];
    for( let rectangle of data){
        result.push(logic(rectangle.l,rectangle.b));
    }
    return result;
}
 let areaData = calculate(data,area)
 let perimeterData = calculate(data,perimeter)

 console.log(areaData);
 console.log(perimeterData);
