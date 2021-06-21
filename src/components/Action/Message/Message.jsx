import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru';

import styles from './Message.module.scss';


const Message = (props) => {
    const {
        style,
        text,
        isMe,
    } = props

    let date = new Date();

    return (
        <div >
            <div className={styles.messageAvatar}>
                <div className={styles.avaWrapp}>
                    <div className={styles.ava} style={style}></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.bubble}>
                        <div className={styles.text}>
                            {text}
                        </div>
                    </div>
                    <div className={styles.date}>
                        {formatDistanceToNow(new Date(2021, 5, 21, 20, 12, 30), { addSuffix: true, includeSeconds: true, locale: ruLocale })}
                        {/*{formatDistanceToNow(date, {includeSeconds: true,*/}
                        {/*     addSuffix: true, locale: ruLocale})}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;