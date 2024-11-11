import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import MyApp61 from "./apps/MyApp61.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp61 />
    </Provider>
  </StrictMode>,
);
