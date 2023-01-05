import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "../components/login.component";
import SignUp from "../components/signup.component";

import { AuthContext } from "../contexts/auth";

const AppRoutes = () => {
  return (
    <Router>
      <AuthContext.Provider>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            </div>
          </div>
        </div>
      </AuthContext.Provider>
    </Router>
  );
};

export default AppRoutes;
