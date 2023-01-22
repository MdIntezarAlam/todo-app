import React from 'react'
import "../../Styles/todo.css"

const Todo_display_Data = ({ title, desc, deleteTodo, id }) => {
    
    return (
        <div className='todo_display'>
            <div className='todo_d_d'>{title}</div>
            <div className='todo_d_d'>{desc}</div>
            <button className='minusBtn' onClick={() => deleteTodo(id)}>-</button>
        </div>

    )
}

export default Todo_display_Data