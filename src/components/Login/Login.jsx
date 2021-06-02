import React from 'react';
import Button from "@material-ui/core/Button";
import style from './Login.module.scss'
import TextField from "@material-ui/core/TextField";


const Login = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.middleBlock}>
                <div className={style.textBlock}>
                    <h2>Войти в аккаунт</h2>
                    <div>Пожалуйста, войдите в аккаунт</div>
                </div>
                <div className={style.textField}>
                    <TextField
                        variant={"standard"}
                        label={"Login"}
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
                <div className={style.reg}>
                    <a href={"#"}>Зарегестрироваться</a>
                </div>
            </div>

        </div>

    );
};

export default Login;