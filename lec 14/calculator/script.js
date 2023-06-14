const inp = document.querySelector('input');
const buttons = document.querySelectorAll('button')

for( let button of buttons){
    button.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText;

        if(buttonText === 'C'){
            inp.value = " ";
        }
        else if(buttonText === 'X'){
            inp.value += '*'
        }
        else if(buttonText === '='){
            try {
                inp.value= eval(inp.value)
            } catch (error) {
                inp.value = 'error'
            }
        }

        else {
            inp.value += buttonText
        }

})
}