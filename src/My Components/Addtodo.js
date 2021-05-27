import React from 'react'
import { useState } from 'react';


export const Addtodo = (props) => {
    // it means that we’re making two new variables title and setTitle, where title is set to the first value returned by useState, and setTitle is the second. It is equivalent to this code:
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        // it will not refresh the page when we submit the form
        e.preventDefault();
        // if and else condition
        if (!title || !desc) {
            alert("you can not add empty Todo")
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("")
        }
    }
    return (
        // how to take the input in react using forms 
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="todo_title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} required autoFocus className="form-control" id="todo_title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="todo_desc" className="form-label">Todo Decsription</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} required className="form-control" id="todo_desc" />
                </div>

                <button type="submit" className="btn btn-outline-dark fjsdlkjfl45543532" onClick={() => { props.change('Submititng', 'Submit') }} >Submit</button>
            </form>
        </div>
    )
}
