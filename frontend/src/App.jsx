import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promptly from "./component/Promptly";
import Gemini from "./component/Gemini/Gemini";
import Register from "./component/Auth/register";
import { Toaster } from "react-hot-toast";
import Login from "./component/Auth/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Promptly />} />
        <Route path="/chat" element={<Gemini />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        
      />
    </BrowserRouter>
  );
};

export default App;
