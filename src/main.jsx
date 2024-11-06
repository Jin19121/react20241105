import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MeApp24 from "./practice/MeApp24.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MeApp24 />
    </Provider>
  </StrictMode>,
);
