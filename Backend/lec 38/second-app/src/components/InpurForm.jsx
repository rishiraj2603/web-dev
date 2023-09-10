import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const InpurForm = (props) => {
    const [input, setInput] = useState('')

    function Submit(e) {

        e.preventDefault();

        const newTodo = { id: uuid(), text: input }
        // console.log(newTodo)

        props.addTodo(newTodo);

        setInput('');
    }
    function Change(e) {

        setInput(e.target.value);
        // console.log(input)
    }
    return (

        <div>
            <form onSubmit={Submit}>
            <input onChange={Change} type="text" placeholder='type here...!!' value={input} />
            <button>Add</button>

            </form>
        </div>
    )
}

export default InpurForm