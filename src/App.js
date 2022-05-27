
// import { Switch, Route, Redirect } from "react-router-dom";
// import Home from "./pages/Home";
// import Tables from "./pages/Tables";
// import Billing from "./pages/Billing";
// import Rtl from "./pages/Rtl";
// import Profile from "./pages/Profile";
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import Main from "./components/layout/Main";
// import "antd/dist/antd.css";
// import "./assets/styles/main.css";
// import "./assets/styles/responsive.css";

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route path="/sign-up" exact component={SignUp} />
//         <Route path="/sign-in" exact component={SignIn} />
//         <Main>
//           <Route exact path="/dashboard" component={Home} />
//           <Route exact path="/tables" component={Tables} />
//           <Route exact path="/billing" component={Billing} />
//           <Route exact path="/rtl" component={Rtl} />
//           <Route exact path="/profile" component={Profile} />
//           <Redirect from="*" to="/dashboard" />
//         </Main>
//       </Switch>
//     </div>
//   );
// }

// export default App;
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import PrivateVendorRoute from './components/auth/privateRoute'
import Login from './pages/SignIn'
// import {  useRouteMatch } from 'react-router-dom';
import './index.css'
// import License from "./pages/Customer/License";
import Users from './pages/Users'
import Broadcast from './pages/broadcast'
import Tickets from './pages/tickets'
import Chats from './pages/Chats'
import Logs from './pages/Logs'
import Ticketviewer from './pages/tickets/ticketviewer'

function App() {

  // let { path } = useRouteMatch();
  
  return (  
  
  <Router>
    <main className="App">

    <Route path="/auth/dashboard" component={Dashboard} exact/>
    <Route path="/" component={Login} exact/>
    
    
    {/* <Route path="/auth/customer" component={Customer} exact/> */}
    <Route path="/auth/users" component={Users} exact/>
    <Route path="/auth/broadcast" component={Broadcast} exact/>
    <Route path="/auth/ticketviewer/:id" component={Ticketviewer} exact/>
    <Route path="/auth/tickets" component={Tickets} exact/>
    <Route path="/auth/chats" component={Chats} exact/>
    <Route path="/auth/logs" component={Logs} exact/>
    {/* <Route path="/auth/customer/license/:id" component={License} exact/> */}

     </main>
    </Router>
  );
}

export default App;
