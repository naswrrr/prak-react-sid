import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import App from "./App.jsx"; // Dia manggil file App di atas

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> 
  </StrictMode>
);