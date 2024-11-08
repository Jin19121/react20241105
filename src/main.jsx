import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App44 from "./practice/App44.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App44 />
    </Provider>
  </StrictMode>,
);
