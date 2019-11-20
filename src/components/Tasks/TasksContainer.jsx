import React from "react";
import {connect} from "react-redux";
import {getTasks, editTask} from "../../redux/tasks-reducer";
import Tasks from "./Tasks";

class TasksContainer extends React.Component {
    componentDidMount = () => {
        this.props.getTasks();
    }

    onPageChanged = (pageNumber) => {
        this.props.getTasks(pageNumber, this.props.sortField, this.props.sortDirection);
    }

    render() {
        return (
            <Tasks tasks={this.props.tasks} 
                   totalTaskCount={this.props.totalTaskCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   getTasks={this.props.getTasks}
                   editTask={this.props.editTask}
                   admin={this.props.admin}
                   />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
        totalTaskCount: state.tasks.totalTaskCount,
        currentPage: state.tasks.currentPage,
        sortField: state.tasks.sortField,
        sortDirection: state.tasks.sortDirection,
        admin: localStorage.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: (pageNumber, sortField, sortDirection) => {
            dispatch(getTasks(pageNumber, sortField, sortDirection));
        },
        editTask: (id, text, status) => {
            dispatch(editTask(id, text, status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
