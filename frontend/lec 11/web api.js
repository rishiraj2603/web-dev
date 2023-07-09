console.log('woke up');
console.log('took bath');
console.log('gone to class');

setTimeout(()=>{
    console.log('order from zomato')
},0000)

let id = setInterval(()=>{
    console.log('order from 1swiggy')
},1000)

setTimeout(()=>{
    clearInterval(id)
},5000)