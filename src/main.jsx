import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp20 from "./apps/MyApp20.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp20 />
  </StrictMode>,
);
