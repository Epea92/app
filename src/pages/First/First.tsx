import React from "react";
// @ts-ignore
import style from './style.module.css'
function First(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <a className={style.TaskPro}>TaskPro</a>
            </div>
            <div className={style.elements}>
                <div className={style.yellow}>
                    <a className={style.w1}>Subscribe</a>
                    <a className={style.w1}>To premium</a>
                    <a className={style.w2}>Buy premium membership</a>
                </div>
                <div className={style.inputMenu}>
                    <div className={style.l1}></div>
                    <div className={style.input}><input placeholder={'Search Anything'}/></div>
                </div>
            </div>
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
                    <div className={style.first}></div>
                    <div className={style.second}></div>
                </div>
                <div className={style.elements3}>
                    <div className={style.first1}></div>
                    <div className={style.second1}></div>
                </div>
            </div>
        </div>
    )
}
export default First;