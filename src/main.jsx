import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp17 from "./apps/MyApp17.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp17 />
  </StrictMode>,
);
