import React, { useState } from "react";
import styled from "styled-components";

export const TodoForm = ({par}) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();

        par(value);

        setValue("");
    }
  return (
    <Container>
        <form className="TodoForm" onSubmit={handleSubmit}>
            <div className="todoform">
                <input type="text" className="todo-input" value={value} placeholder="What is the task for today?" onChange={(e) => setValue(e.target.value)}/>
                <button type="submit" className="todo-button">Add task</button>
            </div>
        </form>
    </Container>
  );
}

const Container = styled.div`
    
    position: relative;
    width: 60vw;
    left: 10rem;
    right: 10rem;
    .todoform {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
        gap: 0.5rem;
        border-radius: 0.3rem;
        margin-bottom: 0.5rem;
        
        background-color: #4682B4;
        input {
            padding: 1.4rem 1rem;
            width: 15rem;
            border-radius: 0.3rem;
            border: none;
        }
        .todo-button {
            background-color: #000080;
            color: #ffffff;
            padding: 1.4rem 1.5rem;
            border-radius: 0.3rem;
            border: none;
            font-weight: bolder;
            font-size: 12px;
        }
    }
`;