import React from "react";
import style from './style.module.css';
import Header from "../Header/Header";
import WilliamDate from "../WilliamDate/WilliamDate";
import Description from "../Description/Description";
import TeamMember from "../TeamMember/TeamMember";
import TodayUpdate from "../TodayUpdate/TodayUpdate";

function AppDesign(){
    return(
        <div>
            <Header/>
        <div className={style.container}>
            <div className={style.info}>
                <a className={style.AppDesign}>App Design</a>
                <a className={style.ta}>Task manager ui kit</a>
                <WilliamDate/>
                <Description/>
                <TeamMember/>
                <TodayUpdate/>
            </div>
        </div>
        </div>
    )
}
export default AppDesign;