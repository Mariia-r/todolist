import React from "react";
import Paginator from "../Paginator/Paginator";

const Tasks = (props) => {
    const tasks = props.tasks.map((task, id) => {
        return (
            <tr key={id}>
                <td>{task.id}</td>
                <td>{task.username}</td>
                <td>{task.email}</td>
                <td>{task.text}</td>
                <td>{task.status}</td>
            </tr>
        )
    });
    
    return(
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Comments</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks}
                </tbody>
            </table>
            <Paginator totalTaskCount={props.totalTaskCount}/>
        </div>
    )
}

export default Tasks;