import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import App73 from "./practice/App73.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App73 />
    </Provider>
  </StrictMode>,
);
