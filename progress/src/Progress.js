import React, { useState, useEffect } from "react";
let interval = null;

function Progress() {
  const [count, setCount] = useState(0);
  const [span, setspan] = useState(false);

  useEffect(() => {
    if (count === 100) {
      //   setCount(5);
      clearInterval(interval);
      return;
    } else count > 0 && getcount();
    return () => clearInterval(interval);
  }, [count]);
  const getcount = () => {
    interval = setInterval(() => setCount(count + 1), 1000);
    setspan(true);
  };

  return (
    <div className="parent">
      {console.log(count)}
      <div className="child" style={{ width: count + "%" }}>
        {count}
        {span && <span className="span">{count} </span>}
      </div>
      <button className="button" onClick={() => getcount()}>
        START
      </button>
    </div>
  );
}
export default Progress;
