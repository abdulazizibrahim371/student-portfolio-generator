import React from "react";
import ReactDom from "react-dom";
import './App.css';
import {useState, useEffect, createContext, useContext, useRef, useReducer }from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Login from "./Login";
import Home from "./pages/Home"; // if you have this
import CreatePortfolio from "./pages/CreatePortfolio";
import PortfolioPreview from "./pages/PortfolioPreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePortfolio />} />
        <Route path="/preview" element={<PortfolioPreview />} />

        {/* <Route path="/preview" element={<PortfolioPreview data={yourPortfolioData} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
