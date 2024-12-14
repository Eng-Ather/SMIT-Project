import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";

export default function Approuter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
