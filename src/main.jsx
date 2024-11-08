import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App48 from "./practice/App48.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App48 />
  </Provider>,
  // </StrictMode>,
);
