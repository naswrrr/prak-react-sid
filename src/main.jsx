import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// 1. Import BrowserRouter dari react-router-dom
import { BrowserRouter } from "react-router-dom"; 
import "./pertemuan-5/assets/tailwind.css"; 
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2. Bungkus App dengan BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);