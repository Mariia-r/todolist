import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import TasksContainer from "./components/Tasks/TasksContainer";
import Login from "./components/Login/Login";
import NewTask from "./components/Tasks/NewTask";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Route 
          path="/" 
          exact
          render={() => <TasksContainer/>}/>
      <Route 
          path="/login" 
          render={() => <Login/>}/>
      <Route 
          path="/createtask"
          render={() => <NewTask/>}/>
    </div>
  );
}

export default App;
