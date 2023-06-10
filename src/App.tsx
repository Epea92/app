import React from 'react';
import {Routes, Route } from "react-router-dom";
import SecondScreen from "./screens/SecondScreen/SecondScreen";
import First from "./pages/First/First";
import Second from "./pages/Second/Second";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = {'/'} element = {<App/>}/>
        <Route path = {'/second-screen'} element = {<SecondScreen/>}/>
      </Routes>
      <First/>
      <Second/>
      <SecondScreen/>
    </div>
  );
}

export default App;
