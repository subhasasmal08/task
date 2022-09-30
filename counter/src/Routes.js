import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
  import App from "./App"
  import Dashboard from "./Pages/Dashboard/Dashboard";
  import Aboutus from "./Pages/About Us/Aboutus";
import Certificate from "./Pages/Certificate/Certificate";

  

  
  export default function Routes() {
    return (
        <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
         
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/certificate">
            <Certificate />
          </Route>

          <Route path="/Aboutus">
            <Aboutus/>
          </Route>
        </Switch>
    </Router>
    )
  }
  

  
//   function Routes() {
   
//     return (
//         <Router>
//         <Switch>
//           <Route exact path="/">
//             <App />
//           </Route>
         
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//     </Router>
  
//     );
//   }
  
//   export default Routes;
  