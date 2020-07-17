import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import AuthProvider from "./contexts/auth.context";

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
