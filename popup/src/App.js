import { useState } from "react";
import "./App.css";

function App() {
  const [Popup, setPopup] = useState(false);
  const [Namee, setNamee] = useState(" ");
  let arr = [
    { Name: "Shubham", Age: 22 },
    { Name: "Subha", Age: 21 },
    {Name: "ruhi", Age: 11}
  ];

  const getName = (name) => {
    console.log(name[1].Name)
    setNamee(name[0].Age);
  };

  // const togglePopup = () => {
  //   document.getElementById("window-id").classList.toggle("active");
  // };

  return (
    <div>
      {/* {Popup && <div className="window" id="window-id">
        <div className="windoww" onClick={() => setPopup(false)}></div>
        <div className="content zoomIn">
          <div className="closebtn" onClick={() => setPopup(false)}>
            &times;
          </div>
          <p>SUBHA</p>
        </div>
      </div>} */}
      {/* <button onClick={() => {getName("subha")} }> popup </button> */}
      <button onClick={() => getName(arr)}> Name </button>


      {/* <p> {arr.map((x) => x.Name+" ")}</p> */}
      <p> {arr.map((x) => x.Name === "Subha" || x.Name === "ruhi" ? x.Age+" " : "")}</p>


    </div>
  );
}

export default App;
