import { useState } from "react";
import "./App.css";

let specialCharactersRegex = /[!@#$%^&*()+_~`\-=\[\]{};':"\\|,.<>\/?]+/;
let integerRegex = /^\d*\.?\d*$/;
let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let arr = [];

let newArr = [
  {
    name: "shubham",
    age: 24,
  },
  {
    name: "subha",
    age: 22,
  },
  {
    name: "faisal",
    age: 25,
  },
  {
    name: "mangesh",
    age: 28,
  },
];

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(" ");
  const [printValue, setprintValue] = useState(false);

  const checkEmail = (e) => {
    // if(email.match(emailRegex)){
    //   setprintValue(true)
    //   return true;
    // } else {
    //   alert("invalid email")
    // }
    arr.push("username");
    console.log("s");
  };

  // //  function validate() {
  // //   var element = document.getElementById('input-feild');
  // //   element.value = element.value.replace();
  //  };

  return (
    <div className="App">
      {console.log(arr)}
      <h3>USERNAME</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(
            e.target.value
              .replace(specialCharactersRegex, " ")
              .replace("  ", "")
              .trimStart()
          );
        }}
      />
      <h3>AGE</h3>
      <input
        type="text"
        value={age}
        onChange={(e) => {
          if (!isNaN(e.target.value)) {
            setAge(e.target.value);
          }
        }}
      />
      <h3>EMAIL</h3>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <h3>NUMBER</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          if (!isNaN(e.target.value)) {
            setNumber(e.target.value);
          }
        }}
      ></input>
      <br></br>
      <br></br>
      <button onClick={() => checkEmail()}>Submit</button>

      {printValue && (
        <div>
          <p>{username}</p>
          <p>{email}</p>
          <p>{age}</p>
          <p>{number}</p>
        </div>
      )}
      <br></br>
      <br></br>
      <button onClick={() => setUsername("1")}>1</button>
      <button onClick={() => setUsername("2")}>2</button>
      <button>3</button>
      <button>4</button>

      {newArr.map((x) => (
        <div>{x.name === "subha" || x.name === "faisal" ? x.age : null}</div>
      ))}
    </div>
  );
}

export default App;

// const arr = ["abc", "defki", "g", "ik"];
// let newArray = [];

// let x = arr.map ((arr) => {
//   return(arr==="abc" ? newArray.push("abc") : newArray)
// })

// {
//   arr.splice(2, 1);
// }

// arr.map((x) => {
//   // x==="def" || x==="i" && newArray.push("def")
//   if (x === "def") {
//     newArray.push("def");
//   } else if (x === "i") {
//     newArray.push("i");
//   } else {
//     if (newArray.includes("demo")) {
//       return;
//     } else {
//       newArray.push("demo");
//     }
//   }
// });

//let x= arr.map((arr, x){

// })

//  arr1

// let todoList = [

// {item_name:"Apple", price:"$5", quantity:1, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},

// {item_name:"Bannana", price:"$3", quantity:2, brand_details: {name:"Fuji", location:"San Diego"}, isChecked:false},

// {item_name:"Pears", price:"$7", quantity:4, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},

// {item_name:"Milk", price:"$4", quantity:3, brand_details: {name:"Mother Dairy", location:"California"}, isChecked:false},

// ];

// let arr = ["abc", "def", "g", "i"]
//   let newArray1 = ["xyz"]
//   let newArray2 =["hru"]

//   let x= arr.map(function(arr, index)
//   {
//     return(index===0 ? arr+newArray1 : arr+newArray2);
//   })
//   console.log(x)

// let arr = ["abc", "def", "g", "i"]
//   let newArray = ["xyz"]

//   let arr1= arr.map(x => x+(newArray));
//   console.log(arr1)
