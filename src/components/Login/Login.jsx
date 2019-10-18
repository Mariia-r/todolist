import React from "react";
import { Field, reduxForm } from 'redux-form';
import {required, renderField} from "../FormValidators"
import css from "./Login.module.css"

const LoginForm = (props) => {
    const {handleSubmit} = props;
    
    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className={css.loginForm}>
                <div className="form-group">
                    <label htmlFor="user">User</label>
                    <Field name="name" 
                        component={renderField}
                        type="text"
                        className="form-control"
                        placeholder="User"
                        validate={[required]}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Email</label>
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
                    <p>Login: Admin</p>
                    <p>Password: 123</p>
                </div>
            </form>
        </div>
    )
}

const LoginReactForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    let login = (values) => {
        console.log(values);
      }
      return <LoginReactForm onSubmit={login}/>
}

export default Login;