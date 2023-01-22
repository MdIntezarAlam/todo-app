import React, { useState } from 'react'
import '../../Styles/todo.css'
import Todo_display_Data from './Todo_display_Data'

const Todo = () => {

    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const formSubmit = (e) => {
        e.preventDefault()
        setTodo([...todo, { title, desc }])
        // console.log(todo)
    }

    const deleteTodo = (id) => {
        const filterTodo = todo.filter((value, index) => {
            return index !== id
        })
        setTodo(filterTodo)
    }

    return (
        <div className='todo'>
            <form onSubmit={formSubmit}>
                <div className='todo_fotm'>
                    <h1>Welcome To Daily Life Solutions</h1>
                    <input type="text" placeholder='Enter Title' className='inputFields' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder='Enter Description' className='inputFields' value={desc} onChange={(e) => setDesc(e.target.value)} />
                    <button type='submit'>Add</button>
                    {todo.map((data, id) => (
                        // <Todo_display_Data key={data.id} title={data.title} desc={data.desc} deleteTodo={deleteTodo} id={id} />
                        <div key={data.id}>
                            <div className='todo_display'>
                                <div className='todo_d_d'>{data.title}</div>
                                <div className='todo_d_d'>{data.desc}</div>
                                <button className='minusBtn' onClick={() => deleteTodo(id)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default Todo