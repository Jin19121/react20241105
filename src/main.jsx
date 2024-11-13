import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import App72 from "./apps/App72.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App72 />
    </Provider>
  </StrictMode>,
);
