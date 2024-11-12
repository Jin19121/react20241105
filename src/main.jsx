import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import App66 from "./practice/App66.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App66 />
    </Provider>
  </StrictMode>,
);
