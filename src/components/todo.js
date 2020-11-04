import React, { useState } from "react";
import CancelButton from "./buttons/cancelButton";
import ConfirmButton from "./buttons/confirmButton";
import EditButton from "./buttons/editButton";
import TrashButton from "./buttons/trashButton";
import Checkbox from "./checkbox";

const Todo = (props) => {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id} type="text" value={newName} onChange={handleChange}/>
            </div>
            <div>
                <CancelButton setEditing={setEditing} />
                <ConfirmButton />
            </div>
        </form>
    );
    const viewTemplate= (
        <div>
            <div>
                <Checkbox id={props.id} name={props.name} checked={props.completed} toogleTaskCompleted={props.toogleTaskCompleted}/>
            </div>
            <div>
                <EditButton setEditing={setEditing}/>
                <TrashButton id={props.id} deleteTask={props.deleteTask}/>
            </div>
        </div>
    );
    function handleChange(e) {
        setNewName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }
    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
    
}

export default Todo