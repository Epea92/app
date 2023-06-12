import React from "react";
import style from './style.module.css';

function TodayUpdate(){
    return(
        <div className={style.container}>
            <div className={style.menu}>
                <a className={style.tu}>Today Update</a>
            </div>
            <div className={style.twoElement}>
                <div className={style.yellow}>

                </div>
            </div>
        </div>
    )
}
export default TodayUpdate;