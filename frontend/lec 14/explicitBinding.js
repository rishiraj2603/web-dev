
// function updatePerson(){
//     this.name = 'name';
//     this.age ='32'
// }

// const person1 = {
//     name : 'hdsa',
//     age : 12
// }

// const person2 = {
//     name :'sdw',
//     age : 54
// }

// const update = updatePerson.bind(person1);

// update();


const item = {
    items:0,
    IncremntItem : function(){
        this.items++;
        console.log()
    }
}

const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    console.log(items)
})
btn.addEventListener('click',item.IncremntItem.bind(item))
