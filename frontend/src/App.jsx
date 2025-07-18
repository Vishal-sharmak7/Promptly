import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promptly from "./component/Promptly";
import Gemini from "./component/Gemini/Gemini";
import { Toaster } from "react-hot-toast";
import Login from "./component/Auth/login";
import Notfound from "./component/Notfound";
import ProtectedRoute from "./component/ProtectRoute/ProtectedRoute";
import PublicRoute from "./component/ProtectRoute/PublicRoute";
import Register from "./component/Auth/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Promptly />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Gemini />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            
              <Register />
            
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
