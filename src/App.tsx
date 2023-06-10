import React from 'react';
import First from "./pages/First/First";
import Second from "./pages/Second/Second";
import AppDesignHeader from "./SecondPage/Header/AppDesignHeader";
import William from "./SecondPage/William/William";
import Info from "./SecondPage/Info/Info";


function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
        <AppDesignHeader/>
        <Info/>
        <William/>
    </div>
  );
}

export default App;
