import React, { useState } from "react";

export default function File() {
  const [File, setFile] = useState([]);

  return (
    <div>
        {console.log(File)}
      File
      <br></br>
      <input type="file"></input>
      <input type="file" multiple></input>
      <br></br>
      <p>select a dir</p>
      <input
        type="file"
        webkitdirectory=""
        // mozdirectory
        directory=""
        // value={File}
        onChange={(e) => {
          setFile(e.target.files);
          //   console.log(e);
        }}
      ></input>
      {/* {      Object.values(File).map((x) => x.name)} */}
      {Object.values(File).map((x)=> x.name+" ")}


    </div>
  );
}
