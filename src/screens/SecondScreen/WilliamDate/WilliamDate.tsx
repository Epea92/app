import React from "react";
import style from './style.module.css';

function WilliamDate(){
    return(
        <div className={style.container}>
            <div className={style.info}>
                <img className={style.william} src={'https://lh3.googleusercontent.com/Hvu7FHODKN1AFv32g0x9zpedsUeQ49M1Zc4mOhsrvqhdbvcDTaGv_RxPfszk4AArMDOB3ZWK9Yef2bRRa7KBoUJPvzbY3SQjD4S_8FcPQA'}/>
                <div className={style.text1}>
                    <a className={style.assigned}>Assigned to</a>
                    <div className={style.name}>
                        <a className={style.name1}>William</a>
                        <a className={style.name2}>Smith</a>
                    </div>

                </div>
                <div className={style.calendarInfo}>
                    <img className={style.calendar} src={'https://static.vecteezy.com/system/resources/previews/000/292/226/non_2x/business-calendar-vector-icon.jpg'}/>
                    <div className={style.text2}>
                        <div>
                            <a className={style.date1}>Due</a>
                            <a className={style.date2}>date</a>
                        </div>
                            <a className={style.feb1}>Feb</a>
                            <a className={style.feb2}>20</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WilliamDate;