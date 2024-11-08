import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import MyApp42 from "./apps/MyApp42.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp42 />
    </Provider>
  </StrictMode>,
);
