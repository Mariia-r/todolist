import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import TasksContainer from "./components/Tasks/TasksContainer";
import Login from "./components/Login/Login";
import NewTask from "./components/Tasks/NewTask";
import Header from "./components/Header/Header";
import {Redirect} from "react-router";
import {connect} from "react-redux";

const App = (props) => {
  return (
      <div className="App">
        <Header admin={props.admin}/>
        <Route 
            path="/" 
            exact
            render={() => <TasksContainer/>}/>
        <Route path="/login">
          {props.admin ? <Redirect to="/"/> : <Login/>}
        </Route> 
        <Route 
            path="/createtask"
            render={() => <NewTask/>}/>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    admin: localStorage.token
  }
}

export default connect(mapStateToProps, null)(App);
