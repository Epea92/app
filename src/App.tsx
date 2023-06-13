import React from 'react';
import Main from "./pages/Main/Main";
import {Route, Routes} from "react-router-dom";
import AppDesign from "./screens/SecondScreen/AppDesign/AppDesign";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Main/>}></Route>
            <Route path={'app-design'} element={<AppDesign/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
