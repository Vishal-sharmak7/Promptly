import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promptly from "./component/Promptly";
import Gemini from "./component/Gemini/Gemini";
import Register from "./component/Auth/register";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Promptly />} />
        <Route path="/chat" element={<Gemini />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        style="background: '#333',
      color: '#fff',"
      />
    </BrowserRouter>
  );
};

export default App;
