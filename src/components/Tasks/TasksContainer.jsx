import React from "react";
import {connect} from "react-redux";
import {setStatusTask, getTasks} from "../../redux/tasks-reducer";
import Tasks from "./Tasks";

class TasksContainer extends React.Component {
    componentDidMount = () => {
        this.props.getTasks();
    }

    onPageChanged = (pageNumber) => {
        this.props.getTasks(pageNumber);
    }

    render() {
        return (
            <Tasks tasks={this.props.tasks} 
                   totalTaskCount={this.props.totalTaskCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   sortTasks={this.props.getTasks}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
        totalTaskCount: state.tasks.totalTaskCount,
        currentPage: state.tasks.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCheckboxDone: (idTask, checked) => {
            dispatch(setStatusTask(idTask, checked))
        },
        getTasks: (pageNumber, sortField, sortDirection) => {
            dispatch(getTasks(pageNumber, sortField, sortDirection));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
