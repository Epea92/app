import React from 'react';
import FirstPage from "./screens/FirstScreen/FirstPage/FirstPage";
import SecondPage from "./screens/FirstScreen/SecondPage/SecondPage";
import Header from "./screens/SecondScreen/Header/Header";
import AppDesign from "./screens/SecondScreen/AppDesign/AppDesign";



function App() {
  return (
    <div className="App">
        <FirstPage/>
        <SecondPage/>
        <Header/>
        <AppDesign/>
    </div>
  );
}

export default App;
