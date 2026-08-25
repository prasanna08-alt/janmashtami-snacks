import React from "react";
import "./app.css";
import Home from "./components/home";
import {HashRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;