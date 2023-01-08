import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import AuthContextProvider from "./Components/Contexts/AuthContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
