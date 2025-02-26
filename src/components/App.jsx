import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import Projects from "../views/Projects";

// This is where we add all our routes for our Personal Website by default, we navigate to the Landing Page
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}