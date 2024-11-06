import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp21 from "./apps/MyApp21.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp21 />
  </StrictMode>,
);
