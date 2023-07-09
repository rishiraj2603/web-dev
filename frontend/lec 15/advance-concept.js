const grandparent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');



grandparent.addEventListener('click', () => {
    console.log('this is grand-parent');
})


parent.addEventListener('click', () => {
    console.log('this is parent') ;
})


child.addEventListener('click', () => {
    console.log('this is child') ;
})