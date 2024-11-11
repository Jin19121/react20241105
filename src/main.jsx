import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import MyApp55 from "./apps/MyApp55.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp55 />
    </Provider>
  </StrictMode>,
);
