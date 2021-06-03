import React, {useState} from 'react';
import style from './Login.module.scss'
import {Route} from "react-router-dom";
import {RegistryForm} from "./RegistryForm/RegistryForm";
import {LoginForm} from "./LoginForm/LoginForm";


const Login = () => {
    let [success, setSuccess] = useState(false);
    return (
        <div className={style.mainBlock}>
            < Route exact path={["/", "/login"]} render={() => <LoginForm/>}/>
            < Route path={"/registry"} render={() => <RegistryForm success={success}/>}/>
        </div>

    );
};

export default Login;