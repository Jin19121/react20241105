import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp1 from "./apps/MyApp1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp1 />
  </StrictMode>,
);
