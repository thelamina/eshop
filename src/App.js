import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import AuthProvider from "./contexts/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
};

export default App;
