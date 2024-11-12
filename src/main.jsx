import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";

function App66() {
  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App66 />
    </Provider>
  </StrictMode>,
);
