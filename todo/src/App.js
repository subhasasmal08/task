import { useEffect, useState } from "react";
import "./App.css";

// let Item = false;

function App() {
  const [Input, setInput] = useState("");
  const [Age, setAge] = useState("");
  const [inputarr, setinputarr] = useState([]);

  const [Item, setItem] = useState(false);
  let newArr = [];

  // inputarr.map((x) => x.Input);

  let arrayNumbers = [50, 100, 150, 200];

  for (let i = 0; i < arrayNumbers.length - 1; i++) {
    arrayNumbers[i + 1] = arrayNumbers[i] + arrayNumbers[i + 1];
  }
  console.log(arrayNumbers);

  //expected output = [50, 150, 300, 500]

  return (
    <div className="task">
      {console.log(inputarr)}
      <p>Enter todo list</p>
      <input
        type="text"
        value={Input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        type="text"
        value={Age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <button
        onClick={() => {
          let _arr = [...inputarr];
          // _arr.push(Input);
          _arr.push({
            name: Input,
            Age: Age,
          });
          setinputarr(_arr);
          setInput("");
          setAge("");
        }}
      >
        Submit
      </button>

      <div className="container">
        {inputarr?.map((item, index) => (
          <div className="mainwrapper" key={index}>
            <p>{index + 1 + ". "}</p>
            {/* <p className={Item ? "strike" : "nonstrike"}>
              Age of {item.name} is {item.Age}
            </p> */}

            <p id={"sent_" + index}>
              Age of {item.name} is {item.Age}
            </p>

            {console.log(Item)}

            {/* if(document.getElementById("btn_" + index).innerHTML=("edit")){
                (document.getElementById("btn_" + index).innerHTML=("done"))
              }} */}

            {/* if(
               document.getElementById("sent_" + index).classList.toggle("strike")){

               } */}
            <button
              id={"btn_" + index}
              onClick={() => {
                document
                  .getElementById("sent_" + index)
                  .classList.toggle("strike");

                if (
                  document
                    .getElementById("sent_" + index)
                    .classList.contains("strike")
                ) {
                  document.getElementById("btn_" + index).innerHTML = "edit";
                } else
                  document.getElementById("btn_" + index).innerHTML = "done";
              }}
            >
              Done
            </button>

            <button
              onClick={() => {
                let _arr = [...inputarr];
                _arr.splice(index, 1);
                setinputarr(_arr);
              }}
            >
              delete
            </button>
          </div>
        ))}
        {inputarr.length === 0 && <p className="nodata">NO DATA</p>}
      </div>
    </div>
  );
}

export default App;
