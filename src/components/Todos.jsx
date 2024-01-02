import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, key, toggleComplete, deleteTodo}) => {
  return (
    <div className="Todo"> 
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
        <div className="icons">
            <div className="icon1">
                <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <div className="icon2" onClick={() => deleteTodo}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
            
        </div>
    </div>
  );
}

