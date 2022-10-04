import React from "react";

export default function Card({ name, description, onclick, setvalue, setdemoo, Popup, object, ssubha, Pink }) {
  return (
    <div>
      <div>
        <h4>
          Name: <span id="spanname"> {name}</span>
        </h4>
        <p>
          DESCRIPTION : <span id="spandesc">{description}</span>
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            onclick();
            setvalue(true);
            setdemoo(false);
            ssubha("subha");
            Pink();
          }}
        >
          SUBMIT
        </button>
      </div>

      { Popup && <p>shubham</p>}
      {console.log(object)}
    </div>
  );
}
