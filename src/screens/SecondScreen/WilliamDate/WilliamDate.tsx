import React from "react";
import style from './style.module.css';
import william from '../../../resources/william.png'

function WilliamDate(){
    return(
        <div className={style.container}>
            <div className={style.info}>
                <img className={william} src={william}/>
                <div className={style.text}>
                    <a className={style.assigned}>Assigned to</a>
                    <a className={style.name}>William Smith</a>
                </div>
            </div>
        </div>
    )
}
export default WilliamDate;