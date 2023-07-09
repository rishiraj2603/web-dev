// ();
// (()=>{});
// (()=>{})();

let obj = (()=>{
let person = {
    name:'rishi',
    age : 32,
    marks:23,
}
 function updateMark(m){
    person.marks = m
    }

    function updateName (naam){
        person.name= naam 
    }

    function print(){
        console.log(person);
    }

    return {
        updateName,
        print
    }
})
obj.print();
obj.updateName('poorvi');
obj.print();

