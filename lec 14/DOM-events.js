const heading = document.querySelector('h1');

// console.log(heading);

// heading.onclick = function(){
//     window.alert('this is not a heading')
// }

// heading.addEventListener('click', ()=>{
//     window.alert(`can't see that its an heading`)
// })

// heading.addEventListener('click',(e)=>{
//     console.log("go to heading")
//     e.target.style.border = '10px solid blue'

// })

heading.addEventListener('mouseenter',(e)=>{

    console.log("go to heading")
    e.target.style.border = '10px solid blue'

})

heading.addEventListener('mouseleave',(e)=>{
    console.log("go to heading")
    e.target.style.border = 'none'

})

const input = document.querySelector('input');
console.log(input)

input.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = 'pink'
})

input.addEventListener('keydown',(e)=>{
    console.log(e.key);
    console.log(e.target.value);
})


// input.addEventListener('keyup',(e)=>{
//     console.log(e.key);
// })


heading.addEventListener('copy',(e)=>{
    e.target.style.display = 'none'

})


input.addEventListener('focusin',(e)=>{
    e.target.style.backgroundColor = 'blue'
})
input.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = 'white'
})
input.addEventListener('focusin',(e)=>{
    e.target.style.backgroundColor = 'green'
})
input.addEventListener('click',(e)=>{
    e.target.style.backgroundColor = 'hotpink'
})
input.addEventListener('focusin',(e)=>{
    e.target.style.backgroundColor = 'teal'
})
input.addEventListener('onload',(e)=>{
   window.alert('ho gaya bhai kaam')
})

input.addEventListener('focusout',(e)=>{
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';

    
})


console.dir(input)