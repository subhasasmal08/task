import React from "react";
let _arr = [];
export default function Dummy() {
  //   var arr = [{
  //       id: 1,
  //       name: 'Subha'
  //     }, {
  //       id: 2,
  //       name: 'ruhi'
  //     },
  //   {
  //     id: 3,
  //     name: 'janvi'
  //   }]

  //  var result = arr.map.filter(x => (x.name));
  //  console.log(result)

  const arr = [
    {
      name: "aaaa",

      age: "16",
    },

    {
      name: "bbbb",

      age: "18",
    },

    {
      name: "cccc",

      age: "20",
    },

    {
      name: "dddd",

      age: "22",
    },
  ];

  arr.map((x) =>
    Object.entries(x).map((value) => {
      if (value.includes("name")) {
        console.log(value)
      }
    })
  );

  // console.log(Object.values(arr).map((x)=> (x.name)));

  return (
    <div>
      Dummy
      <div>{/* <div><p>{result}</p></div> */}</div>
    </div>
  );
}
