import React from "react";
import {addTaskThunk} from "../../redux/tasks-reducer";
import {connect} from "react-redux";
import {Field, reduxForm, reset} from 'redux-form';
import {required, renderField, email} from "../FormValidators"
import css from "./Task.module.css";

const NewTaskForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">User name</label>
                <Field name="name" 
                       component={renderField}
                       type="text"
                       className="form-control"
                       placeholder="Print your name"
                       validate={[required]}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" 
                       component={renderField}
                       type="email"
                       className="form-control"
                       placeholder="Print your email"
                       validate={[required, email]}
                />
            </div>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <Field name="text" 
                       component={renderField}
                       type="text"
                       className="form-control"
                       placeholder="Print your text"
                       validate={[required]}
                />
            </div>
            <button type="submit">Add task</button>
        </form>
      );
}

const NewTaskReactForm = reduxForm({form: 'task'})(NewTaskForm);
  
const NewTask = (props) => {
    let addTask = (values) => {
        props.addTask(values.name, values.email, values.text);
      }
      return <NewTaskReactForm onSubmit={addTask}/>
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (username, email, text) => {
            dispatch(addTaskThunk(username, email, text));
            dispatch(reset("task"));
        }
    }
}

const newTaskContainer = connect (null, mapDispatchToProps)(NewTask);

export default newTaskContainer;