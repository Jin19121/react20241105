import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App43 from "./practice/App43.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App43 />
    </Provider>
  </StrictMode>,
);
