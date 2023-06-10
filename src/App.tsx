import React from 'react';
import SecondScreen from "./screens/SecondScreen/SecondScreen";
import First from "./pages/First/First";
import Second from "./pages/Second/Second";


function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
      <SecondScreen/>
    </div>
  );
}

export default App;
