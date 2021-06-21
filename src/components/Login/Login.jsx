import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import style from './Login.module.scss'
import {RegistryForm} from "./RegistryForm/RegistryForm";
import {LoginForm} from "./LoginForm/LoginForm";


const Login = () => {
    let [success, setSuccess] = useState(false);
    return (
        <BrowserRouter>
            <div className={style.mainBlock}>
                < Route key={"./login"} exact path={["/", "/login"]} render={() => <LoginForm/>}/>
                < Route key={"./registry"} exact path={"/registry"} render={() => <RegistryForm success={success}/>}/>
            </div>
        </BrowserRouter>
    );
};

export default Login;