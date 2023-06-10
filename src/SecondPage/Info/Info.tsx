import React from "react";
import style from './style.module.css';

function Info(){
    return(
        <div className={style.container}>
            <div className={style.j1}>
                <a className={style.info}>App Design</a>
                <a className={style.sInfo}>Task manger ui kit</a>
            </div>

        </div>
    )
}
export default Info;