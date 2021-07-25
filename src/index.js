/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import auth from "./auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
window.$base_api = 'https://watchtrade-api.herokuapp.com'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) =>{ 
        if (auth.isAuthenticated()) {
          return <AdminLayout {...props} />
        }else{
          window.location.href = 'http://domain.com';
        }
      }} />
      <Route exact path="/login/:token" render={(props) =>{ 
        let token = props.match.params.token
        auth.login(token,()=>{
          window.location.href = '/admin/dashboard';            
        })          
      }}/>
      <Redirect exact from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
