import React from 'react';
import FirstPage from "./screens/FirstScreen/FirstPage/FirstPage";
import SecondPage from "./screens/FirstScreen/SecondPage/SecondPage";
import Header from "./screens/SecondScreen/Header/Header";
import AppDesign from "./screens/SecondScreen/AppDesign/AppDesign";
import WilliamDate from "./screens/SecondScreen/WilliamDate/WilliamDate";



function App() {
  return (
    <div className="App">
        <FirstPage/>
        <SecondPage/>
        <Header/>
        <AppDesign/>
        <WilliamDate/>
    </div>
  );
}

export default App;
