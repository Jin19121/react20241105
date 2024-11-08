import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App49 from "./practice/App49.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App49 />
  </Provider>,
  // </StrictMode>,
);
