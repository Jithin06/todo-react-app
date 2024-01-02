import React, { useState } from "react";

export const TodoForm = ({par}) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();

        par(value);

        setValue("");
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <div className="todoform">
            <input type="text" className="todo-input" value={value} placeholder="What is the task for today?" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-button">Add task</button>
        </div>
    </form>
  );
}