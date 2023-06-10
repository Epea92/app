import React from "react";
// @ts-ignore
import style from './style.module.css';
// @ts-ignore
import william from '../../resources/william.png';
import calendar from '../../resources/calendar.png';

function William(){
    return(
        <div className={style.container}>
            <div className={style.william}>
                <img src={william}/>
                <div className={style.info}>
                    <a className={style.t1}>Assigned to</a>
                    <div className={style.name}>
                        <a className={style.t2}>William</a>
                        <a className={style.t2}>Smith</a>
                    </div>
                </div>
            </div>

            <div className={style.date}>
                <img className={style.calendar} src={calendar}/>
                <div className={style.info}>
                    <a className={style.t1}>Due date</a>
                    <a className={style.t2}>Feb 20</a>
                </div>
            </div>

            <div className={style.description}>
            </div>
        </div>
    )
}
export default William;