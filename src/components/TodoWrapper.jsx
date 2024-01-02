import React, { useState } from "react";
import { TodoForm } from "/Users/jithinrajan/Desktop/WebDev/website0/todoapp/src/components/TodoForm.jsx";
import { Todo } from "/Users/jithinrajan/Desktop/WebDev/website0/todoapp/src/components/Todos";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  return (<Container>
    <div className="TodoWrapper">
      <div className="question">
        <h1>Things to do for the day!</h1>
      </div>
      <TodoForm par={addTodo}/>
      {todos.map((todo, index) => (
        <Todo task = {todo} key = {index} toggleComplete={toggleComplete} />
      ))}
    </div>
  </Container>
  );
}

const Container = styled.div`

`;