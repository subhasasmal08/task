import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [Popup, setPopup] = useState(false);
  const [Demo, setDemo] =useState(true);
  const [pink, setpink] = useState("pink")
  const [Namee, setNamee] = useState(" ");
  const [subhaa, setSubhaa] = useState("");
 
  let arr = [
    { Name: "Shubham", Desc: 24 },
    { Name: "Subha", Desc: 21 },
    { Name: "ruhi", Desc: 1 },
    { Name: "janvi", Desc: 25 },
  ];

  const getName = (name) => {
    console.log(name[1].Name);
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
      {/* <button onClick={() => getName(arr)}> Name </button> */}

      {/* <p> {arr.map((x) => x.Name+" ")}</p> */}
      {/* <p> {arr.map((x) => x.Name === "Subha" || x.Name === "ruhi" ? x.Age+" " : "")}</p> */}
      {
        arr.map((x) => (
          <div>
            <Card
              name={subhaa}
              ssubha= {setSubhaa}
              // setsubha={(data)=>console.log(data)}
              description={x.Desc}
              onclick={() => {
                document.getElementById("spanname").style.color = "red";
                document.getElementById("spandesc").style.border= "1px solid red";
               
              }}
              Popup={Popup}
              setvalue={setPopup}
              setdemoo={setDemo}
              Pink={setpink}
              object={arr}
            />
            <Card Arr = {arr.filter((data) => data.Name === "ruhi")}/>
            {Popup  &&<p>Done</p> }
            {Demo &&  <p>Second</p>}
           

          </div>
        ))}

      {/* // <Card */}
      {/* //   name="shubham"
      //   description="dicam"
      //   onclick={() => */}
      {/* //     (document.getElementById("spanname").style.color = "red")
      //   }
      // /> */}
    </div>
  );
}

export default App;
