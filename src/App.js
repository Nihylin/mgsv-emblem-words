import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import CategoryList from "./CategoryList";
import AlphabeticalList from "./AlphabeticalList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlphabeticalList />} />
        <Route path="/categories" element={<CategoryList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
