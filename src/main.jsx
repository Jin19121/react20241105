import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import MyApp49 from "./apps/MyApp49.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <MyApp49 />
  </Provider>,
  // </StrictMode>,
);
