import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import App69 from "./practice/App69.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App69 />
    </Provider>
  </StrictMode>,
);
