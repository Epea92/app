import React from "react";
import style from './style.module.css';
import settings from '../../../resources/settings.png';
import {Link} from "react-router-dom";
function Header(){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.backBlock}>
                    <Link to={'/'}>
                        <a className={style.back}>BACK</a>
                    </Link>
                </div>
                <a className={style.details}>Details</a>
                <img className={style.settings} src={settings}/>
            </div>
        </div>
    )
}
export default Header;