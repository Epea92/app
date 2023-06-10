import React from 'react';
import First from "./pages/First/First";
import Second from "./pages/Second/Second";
import AppDesignHeader from "./SecondPage/AppDesign/AppDesignHeader";


function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
        <AppDesignHeader/>
    </div>
  );
}

export default App;
