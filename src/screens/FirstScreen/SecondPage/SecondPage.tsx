import React from "react";
import style from './style.module.css';
import phone from '../../../resources/phone.png'
import laptop from '../../../resources/laptop.png'
import ball from '../../../resources/ball.png'
import clients from '../../../resources/clients.png'
import {Link} from "react-router-dom";


function SecondPage(){
    return(
        <div className={style.container}>
            <div className={style.title}>
                <div className={style.pt}>Pending Task</div>
                <div className={style.sa}>See All</div></div>
            <div className={style.line}>
                <div className={style.block1}>
                        <div className={style.block1_1}>
                            <Link to={'/app-d'}>
                                <div className={style.inline}><img src={phone}/><div className={style.but}>47% Complete</div></div>
                                <div className={style.text}>APP DESIGN</div>
                                <div className={style.text2}>App Design Task</div>
                            </Link>

                        </div>
                </div>
                <div className={style.block2}>
                    <div className={style.inline}><img src={laptop}/></div>
                    <div className={style.text}>WEB</div>
                    <div className={style.text2}>Web design</div>
                </div>
            </div>
            <div className={style.line}>
                <div className={style.block3}>
                    <div className={style.inline1}><img src={clients}/></div>
                    <div className={style.text}>CLIENT</div>
                    <div className={style.text2}>Ave studio des...</div>
                </div>
                <div className={style.block4}>
                    <div className={style.inline1}><img src={ball}/></div>
                    <div className={style.text}>DRIBBBLE</div>
                    <div className={style.text2}>Create dribbble shot</div>
                </div>
            </div>
        </div>
    )
}
export default SecondPage;