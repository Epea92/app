import React from "react";
import style from './style.module.css';

function Description(){
    return(
        <div className={style.container}>
            <div className={style.menu}>
                <a className={style.description}>Description</a>
                <a className={style.info}>Task manager app ui kit must be uniqe and</a>
                <a className={style.info}>trendy. In this app we need every features and</a>
                <a className={style.info}>section about task manager</a>
            </div>

        </div>
    )
}
export default Description;