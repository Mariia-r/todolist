import React from "react"
import '../../App.css';
import {Link} from "react-router-dom";

const Header = (props) => {
    return(
        <header className="App-header">
            <h1>To Do List</h1>
            <div>
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link" to="/createtask">Add task</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/">Show Tasks</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;