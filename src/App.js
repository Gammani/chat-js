import React from "react";
import {Route, Switch} from "react-router";


import style from './App.module.scss';
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";



function App() {
    return (
        <div className={style.wrapper}>
            <Switch>
                <Route exact path={"/"} render={() => <Login/>}/>
                <Route exact path={"/me"} render={() => <Home/>}/>
            </Switch>
        </div>
    );
}

export default App;
