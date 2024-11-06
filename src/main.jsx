import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MeApp16 from "./practice/MeApp16.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MeApp16 />
  </StrictMode>,
);
