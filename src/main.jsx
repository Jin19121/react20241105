import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import MyApp69 from "./apps/MyApp69.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp69 />
    </Provider>
  </StrictMode>,
);
