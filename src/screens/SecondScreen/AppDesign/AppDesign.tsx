import React from "react";
import style from './style.module.css';

function AppDesign(){
    return(
        <div className={style.container}>
            <div className={style.info}>
                <a className={style.AppDesign}>App Design</a>
                <a className={style.ta}>Task manager ui kit</a>
            </div>
        </div>
    )
}
export default AppDesign;