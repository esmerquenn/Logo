import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/font/font.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Exams from "./Components/Exams";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu/exams" element={<Exams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
