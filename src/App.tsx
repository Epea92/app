import React from 'react';
import FirstPage from "./screens/FirstScreen/FirstPage/FirstPage";
import SecondPage from "./screens/FirstScreen/SecondPage/SecondPage";
import Header from "./screens/SecondScreen/Header/Header";
import AppDesign from "./screens/SecondScreen/AppDesign/AppDesign";
import WilliamDate from "./screens/SecondScreen/WilliamDate/WilliamDate";
import Description from "./screens/SecondScreen/Description/Description";
import TeamMember from "./screens/SecondScreen/TeamMember/TeamMember";
import TodayUpdate from "./screens/SecondScreen/TodayUpdate/TodayUpdate";



function App() {
  return (
    <div className="App">
        <FirstPage/>
        <SecondPage/>
        <Header/>
        <AppDesign/>
        <WilliamDate/>
        <Description/>
        <TeamMember/>
        <TodayUpdate/>
    </div>
  );
}

export default App;
