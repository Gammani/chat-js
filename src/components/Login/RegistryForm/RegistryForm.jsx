import style from "../Login.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import React from "react";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

export const RegistryForm = (props) => {
    return (
        <div className={style.middleBlock}>
            <div className={style.textBlock}>
                <h2>Регистрация</h2>
                <div>Для входа в чат, вам нужно зарегестрироваться</div>
            </div>
            {!props.success ? <>
                <div className={style.textField}>
                    <TextField
                        variant={"standard"}
                        label={"Email"}
                    />
                    <TextField
                        variant={"standard"}
                        label={"Username"}
                    />
                    <TextField
                        variant={"standard"}
                        label={"Password"}
                    />
                    <TextField
                        variant={"standard"}
                        label={"Password"}
                    />
                </div>
                <div className={style.button}>
                    <Button variant="contained" color="primary" href="#contained-buttons" size={"large"}>
                        Зарегестрироваться
                    </Button>
                </div>
                <div className={style.reg}>
                    <NavLink to={"/login"}>Войти в аккаунт</NavLink>
                </div>
            </> : <div className={style.textInfo}>
                <ErrorOutlineOutlinedIcon color={"primary"} fontSize={"large"}/>
                <h3>Подтвердите свой аккаунт</h3>
                <div>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</div>
            </div>}
        </div>
    )
}