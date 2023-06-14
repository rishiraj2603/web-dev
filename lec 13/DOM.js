


const para = document.getElementsByClassName('h1')[0]

console.log(para)



//-------- innerHTML vs  innerTEXT
console.log(para.innerText) // getter
para.innerText='huafasi'// setter


console.log(para.innerHTML) // getter
para.innerHTML='huafasi'// setter


// getAttribiute --- setAttribute --- removeAtrribute

//---- classList --- add(), remove() , toggle()  , contain()