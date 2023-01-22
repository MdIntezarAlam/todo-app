import React, { useState } from 'react'

const STodo = () => {


    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const formSubmit = (e) => {
        e.preventDefault()
        setTodo([...todo, { title, desc }])

        setTitle("")
        setDesc("")
    }

    const deleteTodo = (id) => {
        const fit = todo.filter((value, index) => {
            return index !== id
        })
        setTodo(fit)
    }

    return (
        <div>

            <form onSubmit={formSubmit}>
                <input type="text" placeholder='enter title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input type="desc" placeholder='enter title'
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
                <button type='submit'>add</button>

                {todo.map((data, id) => (
                    <div key={data.id}>
                        <p>{data.title}</p>
                        <p>{data.desc}</p>
                        <button onClick={() => deleteTodo(id)}>   delete</button>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default STodo