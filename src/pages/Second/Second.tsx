import React from "react";
import style from './style.module.css';
import phone from '../../resources/phone.png'
import hands from '../../resources/hands.png';
import laptop from '../../resources/laptop.png'
import dribble from '../../resources/dribble.png'
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
                <div className={style.first}>
                    <img src={phone}/>
                    <div className={style.info}>
                        <a className={style.AppDesign}>APP DESIGN</a>
                        <a className={style.bottom}>App Design Task</a>
                    </div>
                </div>



                <div className={style.second}>
                    <img src={laptop}/>
                </div>



            </div>
            <div className={style.elements3}>
                <div className={style.first1}>
                    <img src={hands}/>
                </div>


                <div className={style.second1}>
                    <img src={dribble}/>
                </div>

            </div>
        </div>
    )
}
export default Second;