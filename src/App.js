// your todos will not leave this computer because it is stored in your local storage
// so no login is required
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./My Components/Header";
import { Todos } from "./My Components/Todos";
import { Footer } from "./My Components/Footer";
import { Addtodo } from "./My Components/Addtodo";
import { About } from "./My Components/About";

// router is use to losd another page without reloading
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// it does not import file name it imports from file name 
// from fle it import export const name

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"))
  }


  const onDelete = (todo) => {
    console.log('i am on delete', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const change = (naam, second_naam) => {
    document.querySelector('.fjsdlkjfl45543532').innerText = naam
    document.querySelector('.fjsdlkjfl45543532').innerText = second_naam
  }


  // how to tke input and manipulate it
  const addTodo = (title, desc) => {
    // if there is no todos then there will be an error in assigning sno
    let sno;
    if (todos.length === 0) {
      sno = 0
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // maybe it will not work because maybe when localStorage will set items it has not able to reach the set todos to permanently set todo
    // after adding todos if the user refresh his todos will be gone
    setTodos([...todos, mytodo]);
    // so in order to save todos we will store it in his local storage
    localStorage.setItem("todos", JSON.stringify(todos));
    // JSON.stringify() will convert the todos in string 
  }


  // create a variable 
  const [todos, setTodos] = useState(inittodo);
  // it will work when todos will change 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My todos list" searchbar={true} />
        {/* we want header always so it is outside the switch  */}

        <Switch>
          {/* react reads the path from the start and if one character maches then it will render it */}
          so in order to avoid this mixup we use exact character to readirect the user in exact path
          <Route exact path="/" render={() => {
            return (
            <>
            <Addtodo change={change} addTodo={addTodo} />
            {/* pass the variable that we have made above */ }
            <Todos todos={todos} onDelete={onDelete} />
            </>
            )
          }}>
            </Route>
          <Route path="/about">
            <About />
          </Route>
          
          
        </Switch>
        {/* we want footer always so it is outside the switch  */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
