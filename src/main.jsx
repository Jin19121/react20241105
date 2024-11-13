import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import App70 from "./practice/App70.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App70 />
    </Provider>
  </StrictMode>,
);
