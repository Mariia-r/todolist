import React, {useState} from "react";

const Task = (props) => {
    let [textTask, setTextTask] = useState(props.task.text);
    let [statusTask, setStatusTask] = useState(props.task.status);

    const editTask = () => {
        props.editTask(props.task.id, textTask, props.task.status);
    }
    const handleChangeText = (e) => {
        setTextTask(e.target.value);
    }
    const handleChangeStatus = (e) => {
        setStatusTask(e.target.value);
        props.editTask(props.task.id, props.task.text, e.target.value);
    }
    return (
        <tr>
            <td>{props.task.id}</td>
            <td>{props.task.username}</td>
            <td>{props.task.email}</td>
            {props.admin 
                ? <td>     
                        <input type="text" value={textTask} onChange={handleChangeText}/>
                        <button type="submit" onClick={editTask}>Save</button>
                </td>
                : <td>{props.task.text}</td>}
            {props.admin
                ? <td> 
                    <input 
                        type="number" 
                        value={statusTask} 
                        min="0" 
                        max="10" 
                        step="10"
                        onChange={handleChangeStatus}
                  />
                </td>
                : <td>{props.task.status}</td>}
        </tr>
    )
}

export default Task;