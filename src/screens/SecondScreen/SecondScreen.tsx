import React from "react";
// @ts-ignore
import style from './style.module.css'
// @ts-ignore
import back from '../../resources/back.png'

function SecondScreen(){
    return(
        <div className={style.container}>
            <div className={style.menu}>
                <img className={style.back} src={back}/>
            </div>
        </div>
    )
}
export default SecondScreen;