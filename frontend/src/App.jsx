import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promptly from "./component/Promptly";
import Gemini from "./component/Gemini/Gemini";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Promptly />} />
        <Route path="/chat" element={<Gemini />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
