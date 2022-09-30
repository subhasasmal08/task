import React from "react";
import "./App.scss";

import { useHistory } from "react-router-dom";

export default function App({ children, onTopClick, name, subContent}) {
  let history = useHistory();

  return (
    <div className="wrapper" onClick={onTopClick}>
      <div className="top_wrapper">
        <div>
          <p
            onClick={() => {
              history.push("/dashboard");
            }}
          >
            Dashboard
          </p>
        </div>

        <div>
          <p
            onClick={() => {
              history.push("/Certificate");
            }}
          >
            Certificate
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              history.push("/aboutus");
            }}
          >
            About Us
          </p>
        </div>
      </div>

      <div className="children">
        <div className="test">
          <p>{name}</p>
          <p>{subContent}</p>
        </div>

        {children}
      </div>
    </div>
  );
}
