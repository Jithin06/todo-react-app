import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

export const Todo = ({task, key, toggleComplete}) => {
  return (
    <Container>
        <div className="Todo"> 
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
            <div className="icons">
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    </Container>
  );
}

const Container = styled.div`
    width: 40vw;
    right: 10rem;
    .Todo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #8758ff;
        color: #fff;
        padding: 0.75rem 1rem;
        border-radius: 5px;
        margin-bottom: 0.5rem;
    }
    
`;