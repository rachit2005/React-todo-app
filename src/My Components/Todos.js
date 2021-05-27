import React from 'react'
import { Todoitems } from "./Todoitems";

// recieve the variable that we have pass from the app.js
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos list</h3>

            {/* important */}

            {/* use a new variable to pass the the todo that we recive in props */}
            {/* carefull with the varaible name */}
            {/* here """""todos""""" is the variable that we have created  which will pass in Todoitems and todo id the name that we have recievd in props */}

            {/* this function takes todo as input */}
            {props.todos.length === 0 ? <div className="notodo">
                
                <div class="alert alert-dark" role="alert">
                    Write your first Todo Now!!!!!!!!!!!!!!!!!
                </div>
            </div> :
                props.todos.map((todo) => {
                    // if you want to return more than one thing then use 
                    return (<> <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr /> </>)
                    // now in brackets return more than one thing with 
                })}
        </div>
    )
}
