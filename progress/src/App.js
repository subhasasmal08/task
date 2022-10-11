
import React from "react";
import "./App.css";
import Progresscomponent from "./Progresscomponent";


const testData = [
  { bgcolor: "#6a1b9a", completed: 10 },

];

function App() {
  return (
    <div className="App">
      <button onClick={testData}>START</button>
      {testData.map((item, idx) => (
        <Progresscomponent key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
  );
}
export default App;