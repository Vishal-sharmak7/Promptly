import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./component/Cards";
import Gemini from "./component/Gemini/Gemini";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/chat" element={<Gemini />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
