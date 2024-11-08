import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import MyApp51 from "./apps/MyApp51.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <MyApp51 />
  </Provider>,
  // </StrictMode>,
);
