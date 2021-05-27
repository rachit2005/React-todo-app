import React from 'react'

// we will recieve the todos variable that we have pass from the Todos 
export const Todoitems = ({todo, onDelete}) => {
    return (
        <div className="scroll-y">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>

{/* use arrow function to execute the function defined in app.js  on command otherwise it will execute on rendering */}
            <button className="btn btn-sm btn-outline-dark" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
