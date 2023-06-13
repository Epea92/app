import React from "react";
import style from './style.module.css';
import phone from '../../../resources/phone.png'
import hands from '../../../resources/hands.png';
import laptop from '../../../resources/laptop.png'
import dribble from '../../../resources/dribble.png'
import {Link, Route, Routes} from "react-router-dom";
function SecondPage(){
    return(
        <div className={style.secondPage}>
            <div className={style.dk2}>
                <a className={style.pt}>
                    Pending Task
                </a>

                <a className={style.sa}> See All</a>
            </div>



            <div className={style.elements2}>
                <div className={style.first}>
                <Link to={'/app-design'}>
                    <img src={phone}/>
                    <a className={style.info}>
                        APP DESIGN
                    </a>
                </Link>
                </div>

                <div className={style.second}>
                    <img src={laptop}/>
                    <a className={style.info}>WEB</a>
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
export default SecondPage;