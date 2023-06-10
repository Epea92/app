import React from "react";
// @ts-ignore;
import style from './style.module.css';
import io from '../../resources/io.png';
import search from '../../resources/search.png';
import crown from '../../resources/crown.png';
function First(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <a className={style.TaskPro}>TaskPro</a>
            </div>
            <div className={style.elements}>
                <div className={style.yellow}>
                    <div className={style.w2}>
                        <a>Subscribe</a>
                        <a>To premium</a></div>
                    <a className={style.w3}>Buy premium membership</a>
                    <div className={style.crown}>
                        <img src={crown}/>
                    </div>

                </div>
                <div className={style.inputMenu}>
                    <div className={style.l1}></div>
                    <div className={style.input}><img className={style.search} src={search}/><input placeholder={'Search Anything'}/><img className={style.set} src={io}/></div>
                </div>
            </div>
        </div>
    )
}
export default First;