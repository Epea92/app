import React from "react";
// @ts-ignore
import style from './style.module.css'
import io from '../../resources/io.png';
function First(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <a className={style.TaskPro}>TaskPro</a>
            </div>
            <div className={style.elements}>
                <div className={style.yellow}>
                    <a className={style.w1}>Subscribe</a>
                    <a className={style.w2}>To premium</a>
                    <a className={style.w3}>Buy premium membership</a>
                </div>
                <div className={style.inputMenu}>
                    <div className={style.l1}></div>
                    <div className={style.input}><input placeholder={'Search Anything'}/><img src={io}/></div>
                </div>
            </div>
        </div>
    )
}
export default First;