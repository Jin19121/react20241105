import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp16 from "./apps/MyApp16.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp16 />
  </StrictMode>,
);
