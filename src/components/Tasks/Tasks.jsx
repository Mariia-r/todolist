import React from "react";
import Paginator from "../Paginator/Paginator";
import css from "./Task.module.css";
import Task from "./Task";

const Tasks = (props) => {
   const tasks = props.tasks.map((task) => {
        return (<Task key={task.id} task={task} editTask={props.editTask} admin={props.admin}/>)
    });

    const btnsSortTasks = (sortField) => {   
        return (
            <div className={css.btnsSort}>
                <button onClick={(e) => {props.getTasks(props.currentPage, sortField, "asc")}}>&#8595;</button>
                <button onClick={(e) => {props.getTasks(props.currentPage, sortField, "desc")}}>&#8593;</button>
            </div>
        )
    }
    
    return(
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th style={{"width": "5%"}}>№</th>
                        <th style={{"width": "20%"}}>
                            User 
                            {btnsSortTasks("username")}
                        </th>
                        <th style={{"width": "25%"}}>
                            Email
                            {btnsSortTasks("email")}
                        </th>
                        <th style={{"width": "35%"}}>
                            Comments
                        </th>
                        <th style={{"width": "15%"}}>
                            Done
                            {btnsSortTasks("status")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks}
                </tbody>
            </table>
            <Paginator totalTaskCount={props.totalTaskCount}
                       onPageChanged={props.onPageChanged} 
                       currentPage={props.currentPage}/>
        </div>
    )
}

export default Tasks;