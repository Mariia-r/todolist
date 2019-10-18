import React from "react";
import {connect} from "react-redux";
import {setStatusTask, getTasks} from "../../redux/tasks-reducer";
import Tasks from "./Tasks";

class TasksContainer extends React.Component {
    componentDidMount = () => {
        this.props.getTasks();
    }

    handleChange = (e, id) => {
        this.props.changeCheckboxDone(id, e.target.checked);
    }

    render() {
        return (
            <Tasks tasks={this.props.tasks} handleChange={this.handleChange} totalTaskCount={this.props.totalTaskCount}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
        totalTaskCount: state.tasks.totalTaskCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCheckboxDone: (idTask, checked) => {
            dispatch(setStatusTask(idTask, checked))
        },
        getTasks: () => {
            dispatch(getTasks());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
