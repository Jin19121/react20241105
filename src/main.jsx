import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp4 from "./apps/MyApp4.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp4 />
  </StrictMode>,
);
