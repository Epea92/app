import React from "react";
import style from './style.module.css';
import settings from '../../../resources/settings.png';
import {Link} from "react-router-dom";
import back from '../../../resources/back.png';

function Header(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.backBlock}>
                    <Link to={'/'}>
                        <img className={style.back} src={back}></img>
                    </Link>
                </div>
                <a className={style.details}>Details</a>
                <img className={style.settings} src={settings}/>
            </div>
        </div>
    )
}
export default Header;