import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import React from "react";

import style from "../Login.module.scss";


export const LoginForm = () => {

    return (
        <div className={style.middleBlock}>
            <div className={style.textBlock}>
                <h2>Войти в аккаунт</h2>
                <div>Пожалуйста, войдите в аккаунт</div>
            </div>
            <div className={style.textField}>
                <TextField
                    variant={"standard"}
                    label={"Username"}
                />
                <TextField
                    variant={"standard"}
                    label={"Password"}
                />
            </div>
            <div className={style.button}>
                <Button variant="contained" color="primary" href="#contained-buttons" size={"large"}>
                    Войти в аккаунт
                </Button>
            </div>
            <div className={style.reg} >
                <NavLink to={"/registry"}>Зарегестрироваться</NavLink>
            </div>
        </div>
    )
}