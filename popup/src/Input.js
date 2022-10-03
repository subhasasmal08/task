import React, { useState } from "react";
import "./Input.css";

export default function Input() {
  const [InputFeild, setInputFeild] = useState([]);
  const [newArr, setnewArr] = useState([""]);
  // let newArr = []

  return (
    <div className="container">
      {/* <button onClick={() => {}}>delete </button> */}
      {console.log(newArr)}
      <div className="wrapper">
        {newArr.map((x, index) => {
          return (
            <div key={index} className="subcontainer">
              <input
                className="inputfeild"
                type="text"
                value={x}
                onChange={(e) => {
                  let _data = [...newArr];
                  _data[index] = e.target.value;
                  setnewArr(_data);
                }}
              />
              <button
              disabled={newArr.length===1}
                className="deletebtn"
                onClick={() => {
                  console.log("first", index);
                  let _arr = [...newArr];
                  console.log(_arr.indexOf(x));
                  _arr.splice(index, 1);
                  setnewArr(_arr);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}

        <button 
         disabled={newArr.length===6}
          className="addbtn"
          onClick={() => {
            let _arr = [...newArr];
            _arr.push("");

            setnewArr(_arr);
          }}
        >
         +
        </button>
      </div>
    </div>
  );
}
