import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import MyApp47 from "./apps/MyApp47.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <MyApp47 />
  </Provider>,
  // </StrictMode>,
);
