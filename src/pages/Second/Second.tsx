import React from "react";
import style from './style.module.css';
import phone from '../../resources/phone.png'


function Second(){
    return(
        <div className={style.secondPage}>
            <div className={style.dk2}>
                <div className={style.pt}>
                    Pending Task
                </div>
                <div className={style.sa}>
                    See All
                </div>
            </div>
            <div className={style.elements2}>
                <div className={style.first}><img src={phone}/>
                    <a className={style.info}></a>
                    <div className={style.whiteElement}><a>47% Complete</a></div>
                </div>
                <div className={style.second}></div>
            </div>
            <div className={style.elements3}>
                <div className={style.first1}></div>
                <div className={style.second1}></div>
            </div>
        </div>
    )
}
export default Second;