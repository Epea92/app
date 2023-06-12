import React from "react";
import style from './style.module.css';
import william from '../../../resources/william.png'
import calendar from '../../../resources/calendar.png'

function WilliamDate(){
    return(
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.text}>
                    <a className={style.assigned}>Assigned to</a>
                    <a className={style.name}>William Smith</a>
                </div>
                <div className={style.calendarInfo}>
                    <img className={style.calendar} src={calendar}/>
                    <div className={style.text}>
                        <a className={style.date}>Due date</a>
                        <a className={style.feb}>Feb 20</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default WilliamDate;