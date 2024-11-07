import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App32 from "./practice/App32.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App32 />
    </Provider>
  </StrictMode>,
);
