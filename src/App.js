
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
import UserProfile from './pages/UserProfile'
import Logbook from './pages/logbook'
import HelpCenter from './pages/HelpCenter'



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
    <Route path="/auth/userprofile" component={UserProfile} exact />
    <Route path="/auth/logbook" component={Logbook} exact/>
    {/* <Route path="/auth/customer/license/:id" component={License} exact/> */}
    <Route path="/auth/help-center" component={HelpCenter} exact/>

     </main>
    </Router>
  );
}

export default App;
