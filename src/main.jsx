import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App50 from "./practice/App50.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App50 />
  </Provider>,
  // </StrictMode>,
);
