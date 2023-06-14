const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');

const item = document.querySelector('#task-list');

btn.addEventListener('click', () => {
    const newList = ` <div class="section-A">
    <input class="checkbox" type="checkbox">
    <p class="text">${inp.value}</p>
</div>
<div class="section-B">
    <span class="up-arrow">⬆️</span>
    <span class="bin">🗑️</span>
    <span class="down-arrow">⬇️</span>
</div>`
    const list = document.createElement('div');
    list.classList.add('task');
    list.innerHTML = newList;
    item.append(list);
    inp.value = ""
})



item.addEventListener('click', (e) => {
    const classes = e.target.getAttribute('class')
    if (classes === 'bin') {
        e.target.parentElement.parentElement.remove();
    }

    else if (classes === 'up-arrow') {
        const currtask = e.target.parentElement.parentElement

        const prevtask = currtask.previousElementSibling;

        prevtask.before(currtask);
    }

    else if (classes === 'down-arrow') {
        const currtask = e.target.parentElement.parentElement

        const nexttask = currtask.nextElementSibling;

        nexttask.after(currtask);
    }


    else if (classes === 'checkbox') {
        e.target.nextElementSibling.classList.toggle('checked')
    }




})