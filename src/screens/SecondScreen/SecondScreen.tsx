import React from "react";
// @ts-ignore
import style from './style.module.css'
// @ts-ignore
import back from '../../resources/back.png'
import menu from '../../resources/round.png';
function SecondScreen(){
    return(
        <div className={style.container}>
            <div className={style.menu}>
                <img className={style.back} src={back}/>
                <a className={style.details}>Details</a>
                <img className={style.round} src={menu}/>
            </div>
        </div>
    )
}
export default SecondScreen;