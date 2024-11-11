import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import App60 from "./practice/App60.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App60 />
    </Provider>
  </StrictMode>,
);
