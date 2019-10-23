import React from "react";
import { Field, reduxForm, reset } from 'redux-form';
import {required, renderField} from "../FormValidators"
import css from "./Login.module.css"
import {login} from "../../redux/auth-reducer" 
import {connect} from "react-redux";

const LoginForm = (props) => {
    const {handleSubmit} = props;

    return (
        <div className="d-flex justify-content-center">
            <form className={css.loginForm} onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="username">User</label>
                    <Field name="username" 
                        component={renderField}
                        type="text"
                        className="form-control"
                        placeholder="User"
                        validate={[required]}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field name="password" 
                        component={renderField}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        validate={[required]}
                    />
                </div>
                <button type="submit" className="btn btn-success">Login</button>
                
                <div className={css.info}>
                    <p>Login: admin</p>
                    <p>Password: 123</p>
                </div>
            </form>
        </div>
    )
}

const LoginReactForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    let login = (values) => {
        props.login(values.username, values.password);
      }
      return <LoginReactForm onSubmit={login}/>
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
            dispatch(reset("login"));
        }
    }
}
export default connect(null, mapDispatchToProps)(Login);