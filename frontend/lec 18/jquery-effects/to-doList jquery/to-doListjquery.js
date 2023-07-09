$('#btn').on('click', (e) => {
    const val = $('#inp').val();
    if(val === ''){
        $('#inp').val('');
    }
    else {
        const newList = ` <div class="section-A">
        <input class="checkbox" type="checkbox">
        <p class="text">${$('#inp').val()}</p>
    </div>
    <div class="section-B">
        <span class="up-arrow">⬆️</span>
        <span class="bin">🗑️</span>
        <span class="down-arrow">⬇️</span>
    </div>`
       const newTask = $("<div>").addClass("task").html(newList);
        $('#task-list').append(newTask);
        $('#inp').val('');
    }
})

$('#task-list').on('click',(e)=>{
    // console.log($(e.target).attr('class'));
    const className = $(e.target).attr('class');

    if(className === 'bin'){
        console.log($(e.target).parent().parent());
        $(e.target).parent().parent().remove();
    }

    else if( className === 'up-arrow'){
        const prevELement = $(e.target).parent().parent().prev();
        const currElement = $(e.target).parent().parent(); 
        prevELement.before(currElement); 
    } 
    else if( className === 'down-arrow'){
        console.log($(e.target).parent().parent().next())
        const nextELement = $(e.target).parent().parent().next();
        const currElement = $(e.target).parent().parent(); 
        nextELement.after(currElement); 
    }
    else if(className === 'checkbox'){
        console.log($(e.target).next());
        $(e.target).next().toggleClass('checked');
    }

})