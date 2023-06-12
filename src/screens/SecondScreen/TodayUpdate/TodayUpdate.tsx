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
                    <div className={style.round}></div>
                    <a className={style.tn}>Task Number 1</a>
                    <a className={style.complete}>(Complete)</a>
                </div>
                <div className={style.black}>
                    <div className={style.round1}></div>
                    <a className={style.tn1}>Task Number 2</a>
                    <a className={style.pending}>(Pending)</a>
                </div>
            </div>
        </div>
    )
}
export default TodayUpdate;